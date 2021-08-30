import Vue from 'vue'

<%_ if (options.import === 'full') { _%>
import * as echarts from 'echarts';
<%_ } else { _%>
import * as echarts from 'echarts/core';
import {
    BarChart
} from 'echarts/charts';
echarts.use(
    [ BarChart ]
);
<%_ } _%>
  
Vue.prototype.$echarts = echarts
