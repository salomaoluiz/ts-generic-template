import {
    createReactNavigationReduxMiddleware,
    createReduxContainer,
  } from "react-navigation-redux-helpers";
  import { applyMiddleware, compose, createStore } from "redux";
  
  import { offline } from "@redux-offline/redux-offline";
  import defaultConfig from "@redux-offline/redux-offline/lib/defaults";
  
  import { connect } from "react-redux";
  import createSagaMiddleware from "redux-saga";
  import Navigator from "../../routes";
  import reducers from "./reducers";
  import { RootState } from "./store";
  
  // Compose de conexão com o React Native Debugger
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  function configureRedux() {
    // Criação dos middlewares das Sagas
    const sagaMiddleware = createSagaMiddleware();
  
    
    
    // Criação do middleware do React Navigation
    const navigationMiddleware = createReactNavigationReduxMiddleware(
      state => state.nav,
      "root",
      );
  
      // Junção de todos os middlewares
    const middlewares = [sagaMiddleware, navigationMiddleware];
  
    // Criando o Container Conectado ao Redux
    const App = createReduxContainer(Navigator, "root");
  
    // Configurando o Redux Offline
    const offlineConfig = {
      ...defaultConfig,
      persistOptions: {
        blacklist: ["nav"],
      },
    };
    
    // Criando a Store
    const store = createStore(
      reducers,
      composeEnhancers(applyMiddleware(...middlewares), offline(offlineConfig)),
    );
    
    const mapStateToProps = (state: RootState) => ({
      state: state.nav,
    });
  
    const NavigationRedux = connect(mapStateToProps)(App);
  
    return { store, NavigationRedux };
  }
  
  export default configureRedux;
  