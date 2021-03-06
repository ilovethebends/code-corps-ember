import Ember from 'ember';

const {
  Component,
  computed: { or },
  get,
  isPresent,
  set
} = Ember;

/**
  `project-long-description` displays and allows editing of the long
  description for the project.

  ## Default usage
  ```handlebars
    {{project-long-description project=project}}
  ```

  @module Component
  @extends Ember.Component
  @class project-long-description
 */

export default Component.extend({
  classNames: ['project-long-description'],

  /**
    Property that holds the edit mode status.

    @property isEditing
    @type Boolean
   */
  isEditing: false,

  /**
    Property that holds whether the project has a description or not.

    @property descriptionIsBlank
    @type Boolean
   */
  descriptionIsBlank: false,

  /**
    Returns whether the editor should be displayed or not based on having no
    description or being toggled into edit mode.

    @property shouldDisplayEditor
    @type Boolean
   */
  shouldDisplayEditor: or('isEditing', 'descriptionIsBlank'),

  didReceiveAttrs() {
    this._inferIfNeedsDescription();
    return this._super(...arguments);
  },

  actions: {

    /**
      Action that leaves edit mode without saving changes.

      @method cancel
     */
    cancel() {
      this._enterReadMode();
    },

    /**
      Action that toggles edit mode.

      @method edit
     */
    edit() {
      this._enterEditMode();
    },

    /**
      Action that saves changes and leaves edit mode.

      @method save
     */
    save() {
      get(this, 'project').save().then(() => {
        this._enterReadMode();
        this._inferIfNeedsDescription();
      });
    }
  },

  _enterEditMode() {
    set(this, 'isEditing', true);
  },

  _enterReadMode() {
    set(this, 'isEditing', false);
  },

  _inferIfNeedsDescription() {
    if (isPresent(get(this, 'project.longDescriptionBody'))) {
      set(this, 'descriptionIsBlank', false);
    } else {
      set(this, 'descriptionIsBlank', true);
    }
  }
});
