import supabase from './supabaseClient';
import {fetchVideoObject, LatestVideoObject} from './types';

export async function fetchLatestVideo(): Promise<LatestVideoObject | null> {
  try {
    const {data, error} = await supabase
      .from('video')
      .select('id, YouTube, niconico')
      .order('id', {ascending: false});
    if (error) {
      console.error('Error fetching video list', error);
      return null;
    }
    const latestVideo = data[0];
    return latestVideo;
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
      .order('id', {ascending: false});
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
      .order('id', {ascending: true});
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
