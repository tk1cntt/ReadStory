# If on Release, must export js bundle to run

if [ "$CONFIGURATION" == "Debug" ]; then
  echo "Debug Configuration"
else
  echo "Release Configuration"
  # in my project "js/node_modules"
  cd js
  # Create a new .jsbundle  
  react-native bundle --platform ios --dev false --entry-file index.ios.js --bundle-output main.jsbundle
  RESOURCE_PATH=$SRCROOT/js
  FILENAME_IN_BUNDLE=main.jsbundle
  BUILD_APP_DIR=${BUILT_PRODUCTS_DIR}/${PRODUCT_NAME}.app
  cp $RESOURCE_PATH/$FILENAME_IN_BUNDLE $BUILD_APP_DIR/$FILENAME_IN_BUNDLE
  echo "Copied jsbundle √"
fi