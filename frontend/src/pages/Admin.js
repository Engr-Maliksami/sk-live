import React, { useEffect } from "react";

// js
import "../assets/js/main.min.js";

//router
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";

// css
import "../assets/css/main.min.css";
import "../assets/css/custom.css";

// component
import Navbar from "../component/navbar/Navbar.js";
import Topnav from "../component/navbar/Topnav.js";
import BannerTable from "../component/table/Banner.js";
import CoinPlanTable from "../component/table/CoinPlan.js";
import PurchaseCoinPlanHistoryTable from "../component/table/PurchaseCoinPlanHistory.js";
import VIPPlanTable from "../component/table/VIPPlan.js";
import PurchaseVIPPlanTable from "../component/table/PurchaseVipPlanHistory.js";
import GiftCategoryTable from "../component/table/GiftCategory.js";
import GiftTable from "../component/table/Gift.js";
import SongTable from "../component/table/Song.js";
import SongDialog from "../component/dialog/Song.js";
import GiftDialog from "../component/dialog/Gift/Add.js";
import HashtagTable from "../component/table/Hashtag.js";
import LevelTable from "../component/table/Level.js";
import UserTable from "../component/table/User.js";
import PostTable from "../component/table/Post.js";
import VideoTable from "../component/table/Video.js";
import UserDetail from "./UserDetail.js";
import UserHistory from "./UserHistory.js";
import PostDetail from "./PostDetail.js";
import VideoDetail from "./VideoDetail.js";
import Dashboard from "./Dashboard.js";
import Setting from "./Settings.js";
// import ThemeTable from "../component/table/Theme.js";
import Advertisement from "../component/table/Advertisement.js";
import PendingComplainTable from "../component/table/PendingComplain.js";
import SolvedComplainTable from "../component/table/SolvedComplain.js";
import PendingRedeemTable from "../component/table/PendingRedeem.js";
import AcceptedRedeemTable from "../component/table/AcceptedRedeem.js";
import DeclineRedeemTable from "../component/table/DeclineRedeem.js";
import ReportedUserTable from "../component/table/ReportedUser.js";
import StickerTable from "../component/table/Sticker.js";
import FakeUser from "../component/table/FakeUser.js";
import FakeUserPage from "../component/dialog/FakeUserPage.js";
import FakePost from "../component/table/FakePost.js";
import FakeVideo from "../component/table/FakeVideo.js";
import FakePostPage from "../component/dialog/FakePostPage.js";
import FakeVideoPage from "../component/dialog/FakeVideoPage.js";

//loader
import Spinner from "./Spinner.js";
import Profile from "./Profile.js";
import FakeComment from "../component/table/FakeComment.js";

const Admin = () => {
  const location = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    if (
      history?.location?.pathname == "/" ||
      history?.location?.pathname == "/admin" ||
      history?.location?.pathname == ""
    ) {
      history.push("/admin/dashboard");
    }
  }, []);

  return (
    <>
      <div class="page-container">
        <Navbar />
        <div class="page-content">
          <Topnav />
          <div class="main-wrapper">
            <Switch>
              <Route
                path={`${location.path}/dashboard`}
                exact
                component={Dashboard}
              />
              <Route
                path={`${location.path}/profilePage`}
                exact
                component={Profile}
              />
              {/* <Route
                path={`${location.path}/banner`}
                exact
                component={BannerTable}
              /> */}
              <Route
                path={`${location.path}/coinplan`}
                exact
                component={CoinPlanTable}
              />
              <Route
                path={`${location.path}/coinplan/history`}
                exact
                component={PurchaseCoinPlanHistoryTable}
              />
              <Route
                path={`${location.path}/vipplan`}
                exact
                component={VIPPlanTable}
              />
              <Route
                path={`${location.path}/vipplan/history`}
                exact
                component={PurchaseVIPPlanTable}
              />
              <Route
                path={`${location.path}/giftCategory`}
                exact
                component={GiftCategoryTable}
              />
              {/* <Route
                path={`${location.path}/theme`}
                exact
                component={ThemeTable}
              /> */}
              <Route
                path={`${location.path}/giftCategory/gift`}
                exact
                component={GiftTable}
              />
              <Route
                path={`${location.path}/giftCategory/gift/dialog`}
                exact
                component={GiftDialog}
              />
              <Route
                path={`${location.path}/gift`}
                exact
                component={GiftTable}
              />
              <Route
                path={`${location.path}/gift/dialog`}
                exact
                component={GiftDialog}
              />
              <Route
                path={`${location.path}/song`}
                exact
                component={SongTable}
              />
              <Route
                path={`${location.path}/song/dialog`}
                exact
                component={SongDialog}
              />
              <Route
                path={`${location.path}/hashtag`}
                exact
                component={HashtagTable}
              />
              <Route
                path={`${location.path}/level`}
                exact
                component={LevelTable}
              />
              <Route
                path={`${location.path}/user`}
                exact
                component={UserTable}
              />
              <Route
                path={`${location.path}/fakeUser`}
                exact
                component={FakeUser}
              />
              <Route
                path={`${location.path}/fake/fakeUserdialog`}
                exact
                component={FakeUserPage}
              />
              <Route
                path={`${location.path}/user/detail`}
                exact
                component={UserDetail}
              />
              <Route
                path={`${location.path}/user/history`}
                exact
                component={UserHistory}
              />

              <Route
                path={`${location.path}/post`}
                exact
                component={PostTable}
              />
              <Route
                path={`${location.path}/post/detail`}
                exact
                component={PostDetail}
              />
              <Route
                path={`${location.path}/post/dialog`}
                exact
                component={FakePostPage}
              />
              <Route
                path={`${location.path}/post/fake`}
                exact
                component={FakePost}
              />
              <Route
                path={`${location.path}/video`}
                exact
                component={VideoTable}
              />
              <Route
                path={`${location.path}/video/fake`}
                exact
                component={FakeVideo}
              />
              <Route
                path={`${location.path}/setting`}
                exact
                component={Setting}
              />
              <Route
                path={`${location.path}/video/detail`}
                exact
                component={VideoDetail}
              />
              <Route
                path={`${location.path}/reportedUser`}
                exact
                component={ReportedUserTable}
              />
              <Route
                path={`${location.path}/advertisement`}
                exact
                component={Advertisement}
              />
              <Route
                path={`${location.path}/pendingComplain`}
                exact
                component={PendingComplainTable}
              />
              <Route
                path={`${location.path}/solvedComplain`}
                exact
                component={SolvedComplainTable}
              />
              <Route
                path={`${location.path}/pendingRedeem`}
                exact
                component={PendingRedeemTable}
              />
              <Route
                path={`${location.path}/acceptedRedeem`}
                exact
                component={AcceptedRedeemTable}
              />
              <Route
                path={`${location.path}/declineRedeem`}
                exact
                component={DeclineRedeemTable}
              />
              {/* <Route
                path={`${location.path}/sticker`}
                exact
                component={StickerTable}
              /> */}
              <Route
                path={`${location.path}/post/dialog`}
                exact
                component={FakePostPage}
              />
              <Route
                path={`${location.path}/post/fake`}
                exact
                component={FakePost}
              />

              <Route
                path={`${location.path}/video/fake`}
                exact
                component={FakeVideo}
              />
              <Route
                path={`${location.path}/video/dialog`}
                exact
                component={FakeVideoPage}
              />
              <Route
                path={`${location.path}/comment`}
                exact
                component={FakeComment}
              />
            </Switch>
            {/* <Spinner /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
