export type TopVideoObject = {
  id: number,
  YouTube: string,
  niconico: string
};

export type fetchVideoObject = {
  id: number,
  title: string,
  YouTube: string,
  niconico: string,
  posted_at: Date,
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
  YouTubeView: number,
  niconicoView: number,
  YouTubeLike: number,
  niconicoLike: number,
  YouTubeComment: number,
  niconicoComment: number,
  niconicoMylist: number
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
