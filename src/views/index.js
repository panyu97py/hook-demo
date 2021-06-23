import {BrowserRouter, Redirect, Route, NavLink} from "react-router-dom";
import useState from "./useState";
import useCallback from "./useCallback";
import useEffect from "./useEffect";
import useRef from "./useRef";
import useContext from "./useContext";
import useReduce from "./useReduce";
import useLayoutEffect from './useLayoutEffect'
import useMemo from './useMemo'
import customizeHook from "./customizeHook";
import useImperativeHandle from "./useImperativeHandle";
import useDebugValue from "./useDebugValue";
import './index.css'

function IndexView() {
    return (
        <BrowserRouter>
            <div className='mainView'>
                <div className='left'>
                    <NavLink to='/useState'>useState</NavLink>
                    <NavLink to='/useCallback'>useCallback</NavLink>
                    <NavLink to='/useLayoutEffect'>useLayoutEffect</NavLink>
                    <NavLink to='/useEffect'>useEffect</NavLink>
                    <NavLink to='/useRef'>useRef</NavLink>
                    <NavLink to='/useContext'>useContext</NavLink>
                    <NavLink to='/useReduce'>useReduce</NavLink>
                    <NavLink to='/useMemo'>useMemo</NavLink>
                    <NavLink to='/customizeHook'>customizeHook</NavLink>
                    <NavLink to='/useImperativeHandle'>useImperativeHandle</NavLink>
                    <NavLink to='/useDebugValue'>useDebugValue</NavLink>
                    <NavLink to='/empty'>empty</NavLink>
                </div>
                <div>
                    <Redirect path="/" to="/empty"/>
                    <Route render={()=><div/>} path='/empty'/>
                    <Route component={useState} exact path='/useState'/>
                    <Route component={useCallback} path='/useCallback'/>
                    <Route component={useEffect} path='/useEffect'/>
                    <Route component={useRef} path='/useRef'/>
                    <Route component={useContext} path='/useContext'/>
                    <Route component={useReduce} path='/useReduce'/>
                    <Route component={useMemo} path='/useMemo'/>
                    <Route component={customizeHook} path='/customizeHook'/>
                    <Route component={useLayoutEffect} path='/useLayoutEffect'/>
                    <Route component={useLayoutEffect} path='/useLayoutEffect'/>
                    <Route component={useImperativeHandle} path='/useImperativeHandle'/>
                    <Route component={useDebugValue} path='/useDebugValue'/>
                </div>
            </div>

        </BrowserRouter>
    )
}

export default IndexView
