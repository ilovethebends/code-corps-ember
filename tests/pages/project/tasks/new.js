import {
  clickable,
  collection,
  create,
  fillable,
  text,
  visitable
} from 'ember-cli-page-object';

import projectMenu from 'code-corps-ember/tests/pages/components/project-menu';
import projectSkillsList from 'code-corps-ember/tests/pages/components/project-skills-list';
import skillsTypeahead from 'code-corps-ember/tests/pages/components/skills-typeahead';
import repoSelect from 'code-corps-ember/tests/pages/components/github/repo-select';

export default create({
  clickPreviewTask: clickable('.preview'),
  clickSubmit: clickable('[name=submit]'),

  errors: collection({
    scope: '.error'
  }),

  taskTitle: fillable('[name=title]'),
  taskMarkdown: fillable('[name=markdown]'),

  projectMenu,
  projectSkillsList,

  previewBody: {
    scope: '.body-preview'
  },

  skillsTypeahead,
  repoSelect,

  taskSkillsList: collection({
    scope: '.task-skills-list',
    itemScope: 'button',
    item: {
      text: text(),
      click: clickable()
    }
  }),

  visit: visitable(':organization/:project/tasks/new')
});
