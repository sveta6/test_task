#!/bin/bash

hadoop jar /home/sveta/hadoop-2.10.1/share/hadoop/tools/lib/hadoop-streaming-2.10.1.jar \
-files map.js,reducer.js \
-input /user/sveta/map/baskets.txt \
-output /user/sveta/map/resultStripes/ \
-mapper map.js \
-reducer reducer.js
