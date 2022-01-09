import { browserSessionPersistence, getAuth, setPersistence, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { navigate } from 'gatsby';
import { makeAutoObservable, runInAction } from 'mobx';

import { UiStore } from './UiStore';
import { printError } from 'utils/others';

export class AuthStore {
  isLoggedIn = false;
  error: string | null = null;

  private uiStore;

  constructor(uiStore: UiStore) {
    makeAutoObservable(this);
    this.uiStore = uiStore;
  }

  loggedIn = getAuth().onAuthStateChanged((user) => {
    runInAction(() => {
      this.isLoggedIn = !!user;
    });
  });

  login = async (email: string, password: string) => {
    this.uiStore.loading = true;
    const auth = getAuth();
    try {
      await setPersistence(auth, browserSessionPersistence);
      await signInWithEmailAndPassword(auth, email, password);

      runInAction(() => {
        this.uiStore.loading = false;
        this.error = null;
      });
    } catch (error: any) {
      printError(error);
      runInAction(() => {
        this.uiStore.loading = false;
        this.error = error.message;
      });
    }
  };

  logout = async () => {
    this.uiStore.loading = true;
    try {
      const auth = getAuth();
      await signOut(auth);
      runInAction(() => {
        this.uiStore.loading = false;
        this.error = null;
      });
      navigate('/login');
    } catch (error: any) {
      printError(error);
      runInAction(() => {
        this.uiStore.loading = false;
        this.error = error.message;
      });
    }
  };
}
