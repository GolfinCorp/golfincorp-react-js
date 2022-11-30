/**
 * @description
 * This module works as a hub for all the context related hooks
 *
 * ! Rules:
 * Inside this module you most create Single Responsability, Small and DRY hooks
 * hooks most return their corresponding context data(useMembers return the member context)
 * Hooks most handle only their corresponding context state.
 */

export { default as useAuth } from './useAuth';
export { default as useCalendar } from './useCalendar';
export { default as useGames } from './useGames';
export { default as useMembers } from './useMembers';
