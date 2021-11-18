import TodoForm from "./components/todoForm/todoForm";
import TodoDisplay from "./components/todoDisplay/todoDisplay";
import { Layout, Menu } from "antd";
import "./App.css";

import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

import { Modal } from "antd";

import { useSelector, useDispatch } from "react-redux";
import actions from "./redux-todo/actions";
import { useEffect, useState } from "react";


function App() {
  const [isVisible, setVisible] = useState(false);
  const [updateData, setUpdateData] = useState(null);

  useEffect(() => {
    dispatch({
      type: actions.getTodo
    })
  },[])

  const todos = useSelector((state) => state.todos.map(el => ({...el, key: el.id})));
  const dispatch = useDispatch();

  const onFormSubmit = (todo) => {
    dispatch({
      type: actions.addTodo,
      payload: { id: Math.random() * 1000, ...todo },
    });
  };

  const onDeleteTodo = (todoId) => {
    console.log(todoId);
    dispatch({
      type: actions.deleteTodo,
      payload: { id: todoId },
    });
  };

  const handleUpdate = (todo) => {
    const { value, statusValue, id, _id } = todo;
    setUpdateData({
      _id,
      id,
      title: value,
      status: statusValue,
    });
    setVisible((visible) => !visible);

  };

  const handleOk = () => {
    dispatch({
      type: actions.updateTodo,
      payload: updateData,
    });
    handleCancel();
  }

  const handleCancel = () => setVisible(false);

  const handleModalChange = (e) => {
    const {
      target: { name, value },
    } = e;
    setUpdateData({
      ...updateData,
      [name]: value
    })
  };

  const { Header, Content } = Layout;

  return (
    <Router>
      <div className="App">
        <Layout className="layout">
          <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <NavLink to="/" className="link">
                  todoForm
                </NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/display" className="link">
                  displayTodo
                </NavLink>
              </Menu.Item>
            </Menu>
          </Header>

          <Content
            className="site-layout"
            style={{ padding: "0 50px", marginTop: 64 }}
          >
            <Switch>
              <Route exact path="/">
                <TodoForm onFormSubmit={onFormSubmit} />
              </Route>
              <Route path="/">
                <TodoDisplay
                  todos={todos}
                  onDeleteTodo={onDeleteTodo}
                  onUpdateTodo={handleUpdate}

                />
              </Route>
            </Switch>
          </Content>
        </Layout>
        <Modal
          title="Basic Modal"
          visible={isVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <div>
            <label>Name</label>
            <br />
            <input
              name="title"
              value={updateData?.title}
              onChange={handleModalChange}
            />
          </div>
          <br />
          <div>
            <label>Status</label>
            <br />
            <select
              name="status"
              onChange={handleModalChange}
              value={updateData?.status}
            >
              <option value="complete">Complete</option>
              <option value="incomplete">Incomplete</option>
            </select>
          </div>
        </Modal>
      </div>
    </Router>
  );
}
export default App;
