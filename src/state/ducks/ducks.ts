import * as count from './count';
import * as user from './user';
import * as columns from './columns';

export const actions = {
  count: count.CountActions,
  user: user.UserActions,
  columns: columns.ColumnsActions,
};

export const selectors = {
  count: count.CountSelectors,
  user: user.UserSelectors,
  columns: columns.ColumnsSelectors,
};
