import testSelector from 'ember-test-selectors';

export default {
  scope: '.github-repo',

  name: {
    scope: testSelector('github-repo-name')
  },

  inLoadingState: {
    isDescriptor: true,
    get() {
      return this.text.indexOf('Loading') > -1;
    }
  },

  actions: {
    scope: testSelector('github-repo-actions'),

    connect: {
      scope: testSelector('connect-repo')
    },

    disconnect: {
      scope: testSelector('disconnect-repo')
    }
  }
};
