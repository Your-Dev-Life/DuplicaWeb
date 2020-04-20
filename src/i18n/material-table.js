const localization = (t) => ({
  body: {
    emptyDataSourceMessage: t('No records to display'),
    addTooltip: t('Add'),
    deleteTooltip: t('Delete'),
    editTooltip: t('Edit'),
    filterRow: {
      filterTooltip: t('Filter')
    },
    editRow: {
      deleteText: t('Are you sure delete this row?'),
      cancelTooltip: t('Cancel'),
      saveTooltip: t('Save'),
    }
  },
  grouping: {
    placeholder: t('Drag headers ...'),
  },
  header: {
    actions: t('Actions')
  },
  pagination: {
    labelDisplayedRows: `{from}-{to} ${t('of')} {count}`,
    labelRowsSelect: t('rows'),
    labelRowsPerPage: t('Rows per page:'),
    firstAriaLabel: t('First'),
    firstTooltip: t('First'),
    previousAriaLabel: t('Previous'),
    previousTooltip: t('Previous'),
    nextAriaLabel: t('Next'),
    nextTooltip: t('Next'),
    lastAriaLabel: t('Last'),
    lastTooltip: t('Last'),
  },
  toolbar: {
    addRemoveColumns: t('Add or remove columns'),
    nRowsSelected: `{0} ${t('row(s) selected')}`,
    showColumnsTitle: t('Show Columns'),
    showColumnsAriaLabel: t('Show Columns'),
    exportTitle: t('Export'),
    exportAriaLabel: t('Export'),
    exportName: t('Export as CSV'),
    searchTooltip: t('Search'),
    searchPlaceholder: t('Search'),
  },
});

export default localization;
