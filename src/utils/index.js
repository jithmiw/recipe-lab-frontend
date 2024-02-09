import { inspireMePrompts } from '../constant';

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * inspireMePrompts.length);
  const randomPrompt = inspireMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}