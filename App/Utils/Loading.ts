interface ILoading {
  show: () => void;
  hide: () => void;
}

let loading: ILoading | null = null;

export const setLoading = (load: ILoading | null) => {
  loading = load;
};

export const Loading = {
  show: () => loading?.show(),
  hide: () => loading?.hide(),
};
