import { makeAutoObservable, runInAction } from 'mobx';

import type { RootStore } from './RootStore';
import { TagService } from 'services/TagService';
import { Tag } from 'types/tag';
import { printError } from 'utils/others';

export class TagsStore {
  tags: Tag[] | null = null;
  error: string | null = null;

  private uiStore;
  private tagService;

  constructor({ db, storage, uiStore }: RootStore) {
    makeAutoObservable(this);
    this.tagService = new TagService(db, storage);
    this.uiStore = uiStore;
  }

  init = () => {
    this.fetchTags();
  };

  fetchTags = async () => {
    this.uiStore.loading = true;
    let data: Tag[] = [];
    try {
      data = await this.tagService.getAll();
    } catch (error) {
      printError(error);
      runInAction(() => {
        this.error = 'Something went wrong fetching the data';
      });
    } finally {
      runInAction(() => {
        this.tags = data;
        this.uiStore.loading = false;
      });
    }
  };

  // getTag = async (id: string): Promise<Tag | null> => {
  //   this.uiStore.loading = true;
  //   let data: Tag | null = null;
  //   try {
  //     data = await this.tagService.get(id);
  //   } catch (error) {
  //     runInAction(() => {
  //       printError(error);
  //       this.error = 'Something went wrong fetching the data';
  //       this.uiStore.loading = false;
  //     });
  //   } finally {
  //     runInAction(() => {
  //       this.uiStore.loading = false;
  //     });
  //   }

  //   return Promise.resolve(data);
  // };

  addTag = async (data: Tag): Promise<string | null> => {
    this.uiStore.loading = true;
    try {
      await this.tagService.add(data);
      runInAction(() => {
        this.tags = [...(this.tags || []), data];
      });
    } catch (error) {
      printError(error);
      runInAction(() => {
        this.error = 'Something went wrong saving the data';
      });
    } finally {
      runInAction(() => {
        this.uiStore.loading = false;
      });
    }
    return Promise.resolve(data.id);
  };
}
