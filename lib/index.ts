import { StoryData, UserInfo } from '../types';

const API_HOST = 'https://hacker-news.firebaseio.com/v0';

const handleUrl = (url: string): string => {
  return new URL(url).hostname;
};

const handleDate = (time: number): string => {
  const seconds = Math.floor(new Date().getTime() / 1000 - time);
  if (seconds < 60) return `${seconds}s`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h`;

  const days = Math.floor(hours / 24);
  return `${days}d`;
};

const getStoryById = async (id: number): Promise<StoryData> => {
  const response = await fetch(`${API_HOST}/item/${id}.json`);
  const data = await response.json();
  const time = handleDate(data.time);
  const url =
    data.url != null ? data.url : `https://news.ycombinator.com/item?id=${id}`;
  const hostname = handleUrl(url);

  return {
    id: data.id,
    by: data.by,
    title: data.title,
    url,
    hostname,
    time,
    score: data.score,
  };
};

const getStoriesIdByCategory = async (category: string): Promise<number[]> => {
  const response = await fetch(`${API_HOST}/${category}stories.json`);
  const data = await response.json();

  return data.slice(0, 50);
};

export const getStoriesByCategory = async (
  category: string
): Promise<StoryData[]> => {
  category = category === '/' ? 'top' : category;
  const ids = await getStoriesIdByCategory(category);
  const stories = await Promise.all(ids.map((id: number) => getStoryById(id)));

  return stories;
};

export const getUserInfoById = async (userId: string): Promise<UserInfo> => {
  const response = await fetch(`${API_HOST}/user/${userId}.json`);
  const data = await response.json();

  return data;
};

// 5 minutes
export const REVALIDATE: number = 60 * 5;
