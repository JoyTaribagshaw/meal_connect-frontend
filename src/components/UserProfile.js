const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem('user_data'));
  return (
    <div>
      {user && (
        <div className="absolute hidden right-2 top-2 p-2 mx-auto rounded-sm shadow-md">
          <p className="p-1 mx-auto font-bold ">{user.data.email}</p>
          <p className=" text-center font-semibold">{user.data.admin ? 'Admin' : 'Client'}</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
