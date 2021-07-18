

export function Todolist({ todolist, handleToggle, handleDelete }) {
   
    return <div>
      
        {todolist.map(e =><div key={e.id}>
            <p>{e.Title}</p>
            
            Status: {e.status}
            <button onClick={() => {
                handleToggle(e.id)
            }}>Toggle</button>
             <button onClick={() => {
                handleDelete(e.id)
            }}>Delete</button>
            </div>
        )}
    </div>
}