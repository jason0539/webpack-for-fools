export default function() {
  import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
	  console.log('sss')
  });
  alert('from anohter planet');
}
