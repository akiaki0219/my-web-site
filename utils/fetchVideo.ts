import supabase from './supabaseClient';
import {VideoObject, fetchVideoObject, TopVideoObject} from './types';

export async function fetchSelectedVideo(id: number): Promise<VideoObject | null> {
  try {
    const {data, error} = await supabase
      .from('video')
      .select('id, YouTube, niconico, title, posted_at, number, type!inner(name), used!inner(character!inner(name), engine!inner(name)), YouTubeView, niconicoView, YouTubeLike, niconicoLike, YouTubeComment, niconicoComment, niconicoMylist')
      .eq('public', true)
      .eq('id', id)
      .limit(1);
    console.log(data);
    if (error) {
      return null;
    }
    return data[0];
  } catch (error) {
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
    console.log(data);
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
      .from('video_with_totalview')
      .select('id, YouTube, niconico')
      .eq('public', true)
      .order('totalView', {ascending: false})
      .limit(1);
    console.log(data);
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
        .from('video_with_totalview')
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
        .from('video_with_totallike')
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
        .from('video_with_totalcomment')
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
    console.log(data);
    if (error) {
      console.log(error);
      return null;
    }
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
    console.log(data);
    if (error) {
      return null;
    }
    return data;
  } catch (error) {
    return null;
  }
}
