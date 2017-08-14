import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import PageObject from 'ember-cli-page-object';
import pageObject from 'code-corps-ember/tests/pages/components/github/repo-select';
import Ember from 'ember';

const { set, run } = Ember;

const page = PageObject.create(pageObject);

moduleForComponent('github/repo-select', 'Integration | Component | github/repo select', {
  integration: true,
  beforeEach() {
    page.setContext(this);
    // defaults
    set(this, 'repositories', []);
    set(this, 'onRepoSelected', () => {});
    renderPage();
  },
  afterEach() {
    page.removeContext();
  }
});

function renderPage() {
  page.render(hbs`
    {{github/repo-select
      onRepoSelected=onRepoSelected
      githubRepos=githubRepos}}
  `);
}

test('it renders options', function(assert) {
  assert.expect(2);

  let githubRepos = [
    { name: 'Repo 1', id: 1 },
    { name: 'Repo 2', id: 2 }
  ];

  run(() => set(this, 'githubRepos', githubRepos));

  page.openDropdown();

  assert.equal(page.githubRepos(0).text, 'Repo 1');
  assert.equal(page.githubRepos(1).text, 'Repo 2');
});

test('it triggers action on selection', function(assert) {
  assert.expect(2);

  let githubRepos = [
    { name: 'Repo 1', id: 1 },
    { name: 'Repo 2', id: 2 }
  ];

  run(() => set(this, 'githubRepos', githubRepos));

  let [repo1, repo2] = githubRepos;

  let assertRepo1 = (repo) => assert.deepEqual(repo, repo1, 'First repo was sent as part of action.');
  run(() => set(this, 'onRepoSelected', assertRepo1));
  page.openDropdown().githubRepos(0).select();

  let assertRepo2 = (repo) => assert.deepEqual(repo, repo2, 'Second repo was sent as part of action.');
  run(() => set(this, 'onRepoSelected', assertRepo2));
  page.openDropdown().githubRepos(1).select();
});
