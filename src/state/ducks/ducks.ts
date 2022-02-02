import * as user from './user';
import * as columns from './columns';

export const actions = {
  user: user.UserActions,
  columns: columns.ColumnsActions,
};

export const selectors = {
  user: user.UserSelectors,
  columns: columns.ColumnsSelectors,
};
