<template>
  <v-card class="ml-12 mr-12 mb-12 rounded-border" height="200" :elevation="3">
      <ag-grid-vue
                style="width: 100%; height: 100%;"
                class="ag-theme-alpine"
                id="myGrid"
                :gridOptions="gridOptions"
                @grid-ready="onGridReady"
                :columnDefs="columnDefs"
                :defaultColDef="defaultColDef"
                :popupParent="popupParent"
                :enableRangeSelection="true"
                :enableCharts="true"
                :processChartOptions="processChartOptions"
                :rowData="rowData"
                @first-data-rendered="onFirstDataRendered"></ag-grid-vue>
                <div id="myChart" class="ag-theme-alpine my-chart"></div>
  </v-card>
</template>

<script>
import {AgGridVue} from "ag-grid-vue";

export default {
    name:"Table",
    data(){
        return {
            gridOptions: null,
            gridApi: null,
            columnApi: null,
            columnDefs: null,
            defaultColDef: null,
            popupParent: null,
            processChartOptions: null,
            rowData: null,
        }
    },
    components:{
        AgGridVue
    }
    ,beforeMount() {
        this.gridOptions = {};
    this.columnDefs = [
      {
        field: 'athlete',
        width: 150,
        chartDataType: 'category',
      },
      {
        field: 'age',
        chartDataType: 'category',
        sort: 'asc',
      },
      { field: 'sport' },
      {
        field: 'year',
        chartDataType: 'excluded',
      },
      {
        field: 'gold',
        chartDataType: 'series',
      },
      {
        field: 'silver',
        chartDataType: 'series',
      },
      { field: 'bronze' },
    ];
    this.defaultColDef = {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      resizable: true,
    };
    this.popupParent = document.body;
    this.processChartOptions = params => {
      var opts = params.options;
      opts.title.enabled = true;
      opts.title.text = 'Medals by Age';
      opts.legend.position = 'bottom';
      opts.seriesDefaults.tooltip.renderer = function(params) {
        var titleStyle = params.color
          ? ' style="color: white; background-color:' + params.color + '"'
          : '';
        var title = params.title
          ? '<div class="ag-chart-tooltip-title"' +
            titleStyle +
            '>' +
            params.title +
            '</div>'
          : '';
        var value = params.datum[params.yKey]
          .toString()
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        return (
          title +
          '<div class="ag-chart-tooltip-content" style="text-align: center">' +
          value +
          '</div>'
        );
      };
      if (opts.xAxis) {
        opts.xAxis.label.rotation = 0;
      }
      if (opts.yAxis) {
        opts.yAxis.label.rotation = 0;
      }
      return opts;
    };
  },
  mounted() {
    this.gridApi = this.gridOptions.api;
    this.gridColumnApi = this.gridOptions.columnApi;
  },
  methods: {
    onFirstDataRendered(params) {
      var createRangeChartParams = {
        cellRange: {
          rowStartIndex: 0,
          rowEndIndex: 79,
          columns: ['age', 'gold', 'silver', 'bronze'],
        },
        chartType: 'groupedColumn',
        chartContainer: document.querySelector('#myChart'),
        aggFunc: 'sum',
      };
      params.api.createRangeChart(createRangeChartParams);
    },
    onGridReady() {
        
      const httpRequest = new XMLHttpRequest();
      const updateData = data => {
        this.rowData = data;
      };

      httpRequest.open(
        'GET',
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/wideSpreadOfSports.json'
      );
      httpRequest.send();
      httpRequest.onreadystatechange = () => {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
          updateData(JSON.parse(httpRequest.responseText));
        }
      };
    },
  }
}

</script>

<style scoped>
    .rounded-border{
        
        border-radius: 10px;
}
.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
    border-radius: 0px;
}
</style>