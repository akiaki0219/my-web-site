import supabase from './supabaseClient';
import {VideoType, Character, Engine} from './types';

export async function fetchVideoTypeArray(): Promise<VideoType[] | null> {
  try {
    const {data, error} = await supabase
      .from('type')
      .select('id, name, video!inner(public)')
      .eq('video.public', true)
      .order('name', {ascending: true});
    if (error) {
      return null;
    }
    return data;
  } catch (error) {
    return null;
  }
}

export async function fetchCharacterArray(): Promise<Character[] | null> {
  try {
    const {data, error} = await supabase
      .from('character')
      .select('id, name, used!inner(video!inner(public))')
      .eq('used.video.public', true)
      .order('name', {ascending: true});
    if (error) {
      return null;
    }
    return data;
  } catch (error) {
    return null;
  }
}

export async function fetchEngineArray(): Promise<Engine[] | null> {
  try {
    const {data, error} = await supabase
      .from('engine')
      .select('id, name, used!inner(video!inner(public))')
      .eq('used.video.public', true)
      .order('name', {ascending: true});
    if (error) {
      return null;
    }
    return data;
  } catch (error) {
    return null;
  }
}
