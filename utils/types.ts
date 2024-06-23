export type LatestVideoObject = {
  id: number,
  YouTube: string,
  niconico: string
};

export type fetchVideoObject = {
  id: number,
  type: {
    name: string
  }[],
  title: string,
  YouTube: string,
  niconico: string,
  number: number,
  posted_at: Date,
  used: {
    character: {
      name: string
    }[],
    engine: {
      name: string
    }[]
  }[],
};

export type VideoObject = {
  id: number,
  type: {
    name: string
  },
  title: string,
  YouTube: string,
  niconico: string,
  number: number,
  posted_at: Date,
  used: {
    character: {
      name: string
    },
    engine: {
      name: string
    }
  }[],
};

export type VideoType = {
  id: number,
  name: string
};

export type Character = {
  id: number,
  name: string
};

export type Engine = {
  id: number,
  name: string
};
