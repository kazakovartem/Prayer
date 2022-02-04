import * as user from './user';
import * as columns from './columns';
import * as prayers from './prayers';
import * as comments from './comments';

export const actions = {
  user: user.UserActions,
  columns: columns.ColumnsActions,
  prayers: prayers.PrayersActions,
  comments: comments.CommentsActions,
};

export const selectors = {
  user: user.UserSelectors,
  columns: columns.ColumnsSelectors,
  prayers: prayers.PrayersSelectors,
  comments: comments.CommentsSelectors,
};

export const sagaWatchers = {
  user: user.UserSagaWatchers,
  columns: columns.ColumnsSagaWatchers,
  prayers: prayers.PrayersSagaWatchers,
  comments: comments.CommentsSagaWatchers,
};
