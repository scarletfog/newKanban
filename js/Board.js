var board = {
	name: 'Tablica Kanban',
	createColumn: function(column) {
	  this.element.append(column.element);
	  initSortable();
	},
	element: $('#board .column-container')
};

$('.create-column')
	.click(function() {
	  var columnName = prompt('Wpisz nazwę kolumny');

		console.log('Chcę stworzyc kolumne ' + columnName);

	  $.ajax({
			url: baseUrl + '/column',
			method: 'POST',
			data: {
	    	name: columnName
			},
			success: function(response) {
				var column = new Column(response.id, columnName);
				board.createColumn(column);
	  	}
	  });
	});

function initSortable() {
  $('.card-list').sortable({
    connectWith: '.card-list',
    placeholder: 'card-placeholder'
  }).disableSelection();
}
