import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [showForm, setShowForm] = useState(false);
  const [friend, setFriend] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowForm() {
    setShowForm((showForm) => !showForm);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((curr) => (curr === friend ? null : friend));
    setShowForm(false);
  }

  function handleSplitBill(value) {
    setFriend((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friend={friend}
          onSelection={handleSelectedFriend}
          selectedFriend={selectedFriend}
        />
        {showForm ? (
          <FormsAddFriend setShowForm={setShowForm} setFriend={setFriend} />
        ) : (
          ""
        )}
        <Button onClick={handleShowForm}>
          {showForm ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          handleSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

function FriendList({ friend, onSelection, selectedFriend }) {
  return (
    <ul>
      {friend.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelection, selectedFriend }) {
  return (
    <li className={selectedFriend === friend ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owe you {friend.balance}
        </p>
      )}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even </p>}

      <Button onClick={() => onSelection(friend)}>
        {selectedFriend === friend ? "Cancel" : "Selected"}
      </Button>
    </li>
  );
}

function FormsAddFriend({ setFriend, setShowForm }) {
  const [name, setName] = useState("");
  const [image, setImg] = useState("https://i.pravatar.cc/48?u");

  const id = crypto.randomUUID();
  function handleSubmit(e) {
    if (!name || !image) return;

    e.preventDefault();
    const newFriend = { name, image: `${image}=${id}`, id, balance: 0 };

    setFriend((friend) => [...friend, newFriend]);

    setImg("https://i.pravatar.cc/48?u");
    setName("");
    setShowForm((e) => !e);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🤼Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <label>🖼Image url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImg(e.target.value)}
      ></input>

      <Button onClick={handleSubmit}>Add</Button>
    </form>
  );
}

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}

function FormSplitBill({ selectedFriend, handleSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setpaidByUser] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    handleSplitBill(whoIsPaying === "user" ? bill - paidByUser : -paidByUser);

    setBill("");
    setpaidByUser("");
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a Bill with {selectedFriend.name}</h2>
      <label>💰Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>

      <label>💸Your Expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setpaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      ></input>

      <label>💲{selectedFriend.name} Expense</label>
      <input type="text" disabled value={bill - paidByUser}></input>

      <label>🤑Who's paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button onClick={handleSubmit}>Split Bill</Button>
    </form>
  );
}

export default App;
