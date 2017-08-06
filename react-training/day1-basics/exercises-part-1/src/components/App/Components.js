import React from 'react';

export const Title = props => {
  return <h1>{props.text}</h1>;
};

export const  Heading = ({title, subtitle}) => {

  return (
      <header>
        <Title text={title}/>
          {subtitle ? <h2>{subtitle}</h2> : null}
      </header>
   );
};


export const  ImageView = ({src, caption}) => {

    return (
        <div>
            <img src={src}/>
            <p>{caption}</p>
        </div>
    );
};


export const  SimpleGallery = ({images}) => {

    return (<div>
            {images.map((img, i) => <img key={i} src={img}/>)}
        </div>)
};

export const  TodoItem = ({done, title}) => {

    return (<div style={done ? {textDecoration: "line-through"} : null}>
        {title}
    </div>)
};

export const  Framer = (props) => {

    return (
        <div style={{"border": "1px solid" + props.color}}>
            {props.children}
            <p>{props.caption}</p>
        </div>
    );
};

export const  SimpleCanvas = ({data}) => {
    return (
        <div>
            {data.map((row,i) => <div key={i} style={{height: "60px"}}>
                {row.map((box,i) =>
                <div key={i} style={{background: box, width: "60px", height: "60px", display: "inline-block"}}></div>)}
            </div>)}

        </div>
    );
};


export const SpecialButton = ({onClick, onSpecialClick, children}) => {
    function myClick(e) {
        if (e.metaKey) onSpecialClick();
        else onClick();
    }
    return (
        <div>
            <button onClick={myClick}>{children}</button>
        </div>
    );
};



export const  TodoItem2 = ({completed, title, onRemove}) => {

    return (<div>
            <TodoItem done={completed} title={title}/>
            <span style={{cursor: "pointer"}} onClick={onRemove}>🗑</span>
        </div>)
};

export const  SimpleCanvas2 = ({data, width, onCellClick}) => {
    return (
        <div>
            {data.map((row,i) => <div key={i} style={{height: "60px"}}>
                {row.map((color,j) =>
                    <div key={j} style={{background: color, width: "60px", height: "60px", display: "inline-block"}}
                    onClick={onCellClick.bind(null,i,j,color)}></div>)}
            </div>)}

        </div>
    );
};

export const  TodoApp = ({items, onRemove, onAddItem}) => {

    function addItem() {
        const title = prompt("enter title");
        onAddItem(title);
    }

    return (<div>
        {items.map((item, i)=> <TodoItem2 completed={item.done} title={item.title} onRemove={() => onRemove(i)} />)}
        <button onClick={addItem}>+</button>
            </div>)
};
