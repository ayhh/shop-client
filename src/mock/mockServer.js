import Mock from 'mockjs';

import banners from  './banners.json';
import floors from './floors.json';


Mock.mock('/mock/banner', {code:200, data: banners})
Mock.mock('/mock/floor', {code:200, data: floors})