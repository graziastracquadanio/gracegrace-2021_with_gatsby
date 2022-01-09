import { deleteDoc, doc, Firestore, getDoc, setDoc } from 'firebase/firestore';
import { FirebaseStorage, ref } from 'firebase/storage';
import { navigate } from 'gatsby';
import { makeAutoObservable, runInAction } from 'mobx';

import { imageFetcher, getRecipeForSaving } from '../utils/recipe';
import { UiStore } from './UiStore';
import { Recipe, RecipeBase, RecipeDetails } from 'types/recipe';
import { printError } from 'utils/others';

export class RecipeStore {
  recipe: Recipe | null = null;
  error: string | null = null;

  private db;
  private storage;
  private uiStore;

  constructor(db: Firestore, storage: FirebaseStorage, uiStore: UiStore) {
    makeAutoObservable(this);
    this.db = db;
    this.storage = storage;
    this.uiStore = uiStore;
  }

  getRecipe = async (id: string) => {
    if (id !== this.recipe?.id) {
      this.uiStore.loading = true;
      try {
        const [recipeBase, recipeDetails] = await Promise.all([
          getDoc(doc(this.db, 'recipes', id)),
          getDoc(doc(this.db, 'recipes-with-details', id)),
        ]);
        if (recipeBase.exists() && recipeDetails.exists()) {
          const imageRef = ref(this.storage, `recipes/${id}.jpg`);
          const image = await imageFetcher(imageRef);
          runInAction(() => {
            this.recipe = {
              ...(recipeBase.data() as RecipeBase),
              ...(recipeDetails.data() as RecipeDetails),
              image,
            };
            this.uiStore.loading = false;
          });
        } else {
          runInAction(() => {
            this.recipe = null;
            this.uiStore.loading = false;
          });
          navigate('/404', {
            state: {
              message: 'Recipe not found',
            },
          });
        }
      } catch (error) {
        runInAction(() => {
          printError(error);
          this.error = 'Something went wrong fetching the data';
          this.uiStore.loading = false;
        });
      }
    }
  };

  setRecipe = async (data: Recipe): Promise<string | null> => {
    const parsedData = getRecipeForSaving(data);
    if (parsedData) {
      const { base, details } = parsedData;
      this.uiStore.loading = true;
      try {
        await Promise.all([
          setDoc(doc(this.db, 'recipes', base.id), base),
          setDoc(doc(this.db, 'recipes-with-details', details.id), details),
        ]);
        runInAction(() => {
          this.uiStore.loading = false;
        });
        return Promise.resolve(base.id);
      } catch (error) {
        printError(error);
        runInAction(() => {
          this.error = 'Something went wrong saving the data';
          this.uiStore.loading = false;
        });
      }
    }
    return Promise.resolve(null);
  };

  removeRecipe = async (id: string) => {
    this.uiStore.loading = true;
    try {
      await deleteDoc(doc(this.db, 'recipes', id));
      runInAction(() => {
        this.uiStore.loading = false;
      });
    } catch (error) {
      printError(error);
      runInAction(() => {
        this.error = 'Something went wrong deleting the data';
        this.uiStore.loading = false;
      });
    }
  };
}
