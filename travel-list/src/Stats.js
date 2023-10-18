function Stats({ items }) {
    const x = items.length;
    const y = items.filter((item) => item.packed === true).length;
    const percentage = Math.floor((y / x) * 100);
    return (
      <footer className="stats">
        {percentage === 100 ? (
          <em>All done. You are ready to go.✈</em>
        ) : (
          <em>
            💼 You have {x} element in your list, and you already packed {y}{" "}
            {x === 0 ? "(0 %)" : `(${percentage}%)`}{" "}
          </em>
        )}
      </footer>
    );
  }

  export default Stats;