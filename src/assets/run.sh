for f in ./*
do
  ft=${f: -3}
  if [ "$ft" = "jpg" ]
  then
  	a=${f: -6:1}
    if [ "$a" = "-" ]
  	then
	  	a=${f: -5:1}
	    echo $f
	    mv $f "$((a-1)).jpg"
	  else
	  	 a=${f: -6:2}
    	echo $f
    	mv $f "$((a-1)).jpg"
	  fi
  else
    continue
  fi
done