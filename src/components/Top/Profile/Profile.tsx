function Profile() {
  return (
    <div>
      <div className="text-center pb-2">
        <h4 className="text-2xl font-medium">Profile</h4>
        <h5>ボイロ実況、ボカロカバー投稿者</h5>
      </div>
      <div className="text-center py-2">
        <h4 className="text-2xl font-medium">history</h4>
        <div className="flex justify-center py-1">
          <table className="w-1/2 table-fixed text-center border-separate border-spacing-x-4">
            <thead>
              <tr>
                <th className="w-1/2">Date</th>
                <th className="w-1/2">Event</th>
              </tr>
            </thead>
            <tbody>
            <tr>
              <td>2023/9/13</td>
              <td>動画投稿開始</td>
            </tr>
            <tr>
              <td>2024/7/1</td>
              <td>Webサイト公開</td>
            </tr>
            </tbody>
          </table>          
        </div>
      </div>
    </div>
  );
}

export default Profile;
