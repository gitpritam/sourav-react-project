const UserCard = ({ name, email }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "340px",
        padding: "28px 24px 24px",
        borderRadius: "20px",
        background: "linear-gradient(145deg, #ffffff 0%, #5b7bff 100%)",
        boxShadow: "0 12px 30px rgba(31, 41, 55, 0.12)",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* <div
        style={{
          width: "82px",
          height: "82px",
          margin: "0 auto 16px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          fontSize: "28px",
          fontWeight: "700",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
        }}
      >
        UN
      </div> */}
      <h3 style={{ margin: "0 0 6px", color: "#111827", fontSize: "22px" }}>
        {name}
      </h3>
      <p style={{ margin: "0 0 20px", color: "#6b7280", fontSize: "14px" }}>
        {email}
      </p>
    </div>
  );
};

export default UserCard;
