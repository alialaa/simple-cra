#!/bin/sh -l

if [ true ] 
then
  echo "error message"
  exit 1
fi

echo "::debug ::Here's a debug message"
echo "::warning ::Here's a warning message"
echo "::error ::Here's a error message"

echo "::add-mask::$1"

echo "Hello $1"
time=$(date)
echo ::set-output name=time::$time

echo "::group::Do some function"
echo 'Some stuff'
echo 'Some stuff'
echo '::endgroup::'

echo "::set-env name=HELLO::$time"


