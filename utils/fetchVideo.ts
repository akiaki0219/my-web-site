import supabase from './supabaseClient';
import {fetchVideoObject, LatestVideoObject} from './types';

export async function fetchLatestVideo(): Promise<LatestVideoObject | null> {
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

export async function fetchVideoList(order: 'latest' | 'oldest', filterType: string[], filterCharacter: string[], filterEngine: string[]): Promise<fetchVideoObject[] | null> {
  try {
    const {data, error} = await supabase
      .from('video')
      .select('id, YouTube, niconico, title, posted_at, number, type!inner(name), used!inner(character!inner(name), engine!inner(name))')
      .eq('public', true)
      .filter('type.name', 'in', `("${filterType.join('","')}")`)
      .filter('used.character.name', 'in', `("${filterCharacter.join('","')}")`)
      .filter('used.engine.name', 'in', `("${filterEngine.join('","')}")`)
      .lt('posted_at', new Date().toISOString())
      .order('id', {ascending: order==='oldest'});
    if (error) {
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
      .select('id, YouTube, niconico, title, posted_at, number, type!inner(name), used!inner(character!inner(name), engine!inner(name))')
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
