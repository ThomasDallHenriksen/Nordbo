import { defineStore } from 'pinia'

export const useCheckboxStore = defineStore('checkbox', {
  state: () => ({
    isChecked: false,
  }),
  actions: {
    toggleCheckbox() {
      this.isChecked = !this.isChecked
    },
  },
});