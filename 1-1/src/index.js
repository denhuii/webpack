import _ from 'lodash';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');

  var btn = document.createElement('button');

  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = '点击我输出log';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
