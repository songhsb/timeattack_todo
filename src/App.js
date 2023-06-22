import React, { useState } from "react";
import uuid from "react-uuid";

function App() {
  const [todos, setTodos] = useState([
    {
      id: uuid(),
      title: "테스트1",
      deatil: "테스트입니다",
      isDone: false,
    },
    {
      id: uuid(),
      title: "테스트2",
      deatil: "테스트입니다",
      isDone: true,
    },
  ]);
  const [title, setTitle] = useState("");
  const [deatil, setDetil] = useState("");

  return (
    <div>
      <header>
        <h1>헤더입니다.</h1>
      </header>
      <main>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const newTodos = { id: uuid(), title, deatil, isDone: false };
            setTodos([...todos, newTodos]);
            setTitle("");
            setDetil("");
          }}
        >
          <span>제목</span>
          <input
            type="text"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></input>
          <span>내용</span>
          <input
            type="text"
            value={deatil}
            onChange={(event) => {
              setDetil(event.target.value);
            }}
          ></input>
          <button type="submit">추가하기</button>
        </form>
        <div>
          <h2>Working</h2>
          {todos
            .filter((todo) => {
              return todo.isDone === false;
            })
            .map((todo) => {
              return (
                <div style={{ border: "1px solid green" }} key={todo.id}>
                  <p>{todo.id}</p>
                  <h3>{todo.title}</h3>
                  <p>{todo.deatil}</p>
                  <button>삭제</button>
                </div>
              );
            })}
          <h2>Done</h2>
          {todos
            .filter((todo) => {
              return todo.isDone === true;
            })
            .map((todo) => {
              return (
                <div style={{ border: "1px solid green" }} key={todo.id}>
                  <p>{todo.id}</p>
                  <h3>{todo.title}</h3>
                  <p>{todo.deatil}</p>
                  <button
                    onClick={function () {
                      const newTodos = todos.filter((t) => {
                        return t.id === todo.id;
                      });
                      setTodos(newTodos);
                    }}
                  >
                    삭제
                  </button>
                  <button>완료</button>
                </div>
              );
            })}
        </div>
      </main>
      <footer>푸터입니다.</footer>
    </div>
  );
}

export default App;
