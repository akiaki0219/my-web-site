import supabase from './supabaseClient';
import {VideoObject, fetchVideoObject, TopVideoObject, rawVideoObject} from './types';

export async function fetchSelectedVideo(id: number): Promise<VideoObject | null> {
  try {
    const {data, error} = await supabase
      .from('video')
      .select('id, YouTube, niconico, title, posted_at, number, type!inner(name), used!inner(character!inner(name), engine!inner(name)), YouTubeView, niconicoView, YouTubeLike, niconicoLike, YouTubeComment, niconicoComment, niconicoMylist')
      .eq('public', true)
      .eq('id', id)
      .limit(1);
    if (error) {
      return null;
    }
    console.log(data)
    const raw = data[0] as unknown as rawVideoObject;
    const video: VideoObject = {
      id: raw.id,
      YouTube: raw.YouTube,
      niconico: raw.niconico,
      title: raw.title,
      posted_at: raw.posted_at,
      number: raw.number,
      type: raw.type.name,
      used: raw.used.map(u => ({
        character: u.character.name,
        engine: u.engine.name,
      })),
      YouTubeView: raw.YouTubeView,
      niconicoView: raw.niconicoView,
      YouTubeLike: raw.YouTubeLike,
      niconicoLike: raw.niconicoLike,
      YouTubeComment: raw.YouTubeComment,
      niconicoComment: raw.niconicoComment,
      niconicoMylist: raw.niconicoMylist
    };
    console.log(video);
    return video;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function fetchLatestVideo(): Promise<TopVideoObject | null> {
  try {
    const {data, error} = await supabase
      .from('video')
      .select('id, YouTube, niconico')
      .eq('public', true)
      .order('id', {ascending: false})
      .lt('posted_at', new Date().toISOString())
      .limit(1);
    if (error) {
      return null;
    }
    return data[0];
  } catch (error) {
    return null;
  }
}

export async function fetchTopVideo(): Promise<TopVideoObject | null> {
  try {
    const {data, error} = await supabase
      .from('video_with_totalanalytics')
      .select('id, YouTube, niconico')
      .eq('public', true)
      .order('totalView', {ascending: false})
      .limit(1);
    if (error) {
      return null;
    }
    return data[0];
  } catch (error) {
    return null;
  }
}

export async function fetchVideoList(order: 'latest'|'oldest'|'mostView'|'mostLike'|'mostComment'|'mostMylist', filterType: string[], filterCharacter: string[], filterEngine: string[]): Promise<fetchVideoObject[] | null> {
  try {
    let query; 
    if (order === 'mostView') {
      query = supabase
        .from('video_with_totalanalytics')
        .select('id, YouTube, niconico, title, posted_at, number, type!inner(name), used!inner(character!inner(name), engine!inner(name))')
        .eq('public', true)
        .filter('type.name', 'in', `("${filterType.join('","')}")`)
        .filter('used.character.name', 'in', `("${filterCharacter.join('","')}")`)
        .filter('used.engine.name', 'in', `("${filterEngine.join('","')}")`)
        .lt('posted_at', new Date().toISOString())
        .order('totalView', {ascending: false});
    }
    else if (order === 'mostLike') {
      query = supabase
        .from('video_with_totalanalytics')
        .select('id, YouTube, niconico, title, posted_at, number, type!inner(name), used!inner(character!inner(name), engine!inner(name))')
        .eq('public', true)
        .filter('type.name', 'in', `("${filterType.join('","')}")`)
        .filter('used.character.name', 'in', `("${filterCharacter.join('","')}")`)
        .filter('used.engine.name', 'in', `("${filterEngine.join('","')}")`)
        .lt('posted_at', new Date().toISOString())
        .order('totalLike', {ascending: false});
    }
    else if (order === 'mostComment') {
      query = supabase
        .from('video_with_totalanalytics')
        .select('id, YouTube, niconico, title, posted_at, number, type!inner(name), used!inner(character!inner(name), engine!inner(name))')
        .eq('public', true)
        .filter('type.name', 'in', `("${filterType.join('","')}")`)
        .filter('used.character.name', 'in', `("${filterCharacter.join('","')}")`)
        .filter('used.engine.name', 'in', `("${filterEngine.join('","')}")`)
        .lt('posted_at', new Date().toISOString())
        .order('totalComment', {ascending: false});
    }
    else if (order === 'mostMylist') {
      query = supabase
        .from('video')
        .select('id, YouTube, niconico, title, posted_at, number, type!inner(name), used!inner(character!inner(name), engine!inner(name))')
        .eq('public', true)
        .filter('type.name', 'in', `("${filterType.join('","')}")`)
        .filter('used.character.name', 'in', `("${filterCharacter.join('","')}")`)
        .filter('used.engine.name', 'in', `("${filterEngine.join('","')}")`)
        .lt('posted_at', new Date().toISOString())
        .order('niconicoMylist', {ascending: false});
    }
    else {
      query = supabase
        .from('video')
        .select('id, YouTube, niconico, title, posted_at, number, type!inner(name), used!inner(character!inner(name), engine!inner(name))')
        .eq('public', true)
        .filter('type.name', 'in', `("${filterType.join('","')}")`)
        .filter('used.character.name', 'in', `("${filterCharacter.join('","')}")`)
        .filter('used.engine.name', 'in', `("${filterEngine.join('","')}")`)
        .lt('posted_at', new Date().toISOString())
        .order('id', {ascending: order==='oldest'});
    }
    const {data, error} = await query;
    if (error) {
      return null;
    }
    console.log(data);
    return data;
  } catch (error) {
    return null;
  }
}

export async function fetchLatestAllVideoList(): Promise<fetchVideoObject[] | null> {
  try {
    const {data, error} = await supabase
      .from('video')
      .select('id, YouTube, niconico, title, posted_at')
      .eq('public', true)
      .order('id', {ascending: false})
      .lt('posted_at', new Date().toISOString());
    if (error) {
      return null;
    }
    return data;
  } catch (error) {
    return null;
  }
}
