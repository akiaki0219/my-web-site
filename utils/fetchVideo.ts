import supabase from './supabaseClient';
import {fetchVideoObject, LatestVideoObject} from './types';

export async function fetchLatestVideo(): Promise<LatestVideoObject | null> {
  try {
    const {data, error} = await supabase
      .from('video')
      .select('id, YouTube, niconico')
      .order('id', {ascending: false})
      .lte('posted_at', new Date().toISOString());
    if (error) {
      console.error('Error fetching video list', error);
      return null;
    }
    return data[0];
  } catch (error) {
    console.error('Error fetching video list', error);
    return null;
  }
}

export async function fetchLatestAllVideoList(): Promise<fetchVideoObject[] | null> {
  try {
    const {data, error} = await supabase
      .from('video')
      .select('id, YouTube, niconico, title, posted_at, number, type(name), used(character(name), engine(name))')
      .order('id', {ascending: false})
      .lte('posted_at', new Date().toISOString());
    if (error) {
      console.error('Error fetching video list', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error fetching video list', error);
    return null;
  }
}

export async function fetchOldestAllVideoList(): Promise<fetchVideoObject[] | null> {
  try {
    const {data, error} = await supabase
      .from('video')
      .select('id, YouTube, niconico, title, posted_at, number, type(name), used(character(name), engine(name))')
      .order('id', {ascending: true})
      .lte('posted_at', new Date().toISOString());
    if (error) {
      console.error('Error fetching video list', error);
      return null;
    }
    return data;
  } catch (error) {
    console.error('Error fetching video list', error);
    return null;
  }
}
