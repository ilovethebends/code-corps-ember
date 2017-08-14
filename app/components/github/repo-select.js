import Ember from 'ember';

const {
  Component
} = Ember;

/**
 * A component holding a power-select dropdown, used to select a github
 * repository for a project.
 *
 * Expects a `githubRepos` attribute to be provided.
 * `githubRepos` can be a promise.
 *
 * @class GithubRepoSelectComponent
 * @module code-corps-ember/components/github/repo-select
 * @extends Ember.Component
 * @public
 */
export default Component.extend({
  classNames: ['repo-select'],

  /**
   * Assignable collection to be rendered as options in a dropdown. Can be
   * a promise. The power-select component will render a loading state for
   * that promise.
   *
   * @property githubRepos
   * @public
   */
  githubRepos: [],

  /**
   * Default handler for the power-select change action.
   *
   * power-select requires some sort of function, so the usual `null` default
   * does not work.
   *
   * @method onRepoSelected
   * @public
   */
  onRepoSelected() {}
});
