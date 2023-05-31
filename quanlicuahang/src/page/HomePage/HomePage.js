import React from "react";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/Navigation";
import "./HomePage.css";
import { FaRegEnvelope, FaRegEye, FaRegUser, FaSearch } from "react-icons/fa";

const HomePage = (props) => {
  const { staffList } = props;
  console.log(props);
  const today = new Date();
  var date =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  var todayHours = new Date();
  var time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const checkList = () => {
    window.location.href = "/InformationPage";
  };
  const checkNot = () => {
    alert("Don't have new notification");
  };
  const goSearch = () => {
    window.location.href = "/Search";
  };

  return (
    <div class="homepage">
      <Header />
      <div className="nav-add">
        <div className="nav">
          <Navigation />
        </div>
        <div className="hp-inf">
          <h1> Welcome back, Trung Hiếu !</h1>
          <p> Date: {date}</p>
          <p> Time: {time}</p>
          <div className="hp-item">
            <div className="hp-account">
              <div className="num-account">
                <h3>Account </h3>
                <p>1</p>
                <button>Active</button>
              </div>
              <div className="num-ava">
                <FaRegUser />
              </div>
            </div>
            <div className="hp-account">
              <div className="num-account">
                <h3>Number of People</h3>
                <p>20</p>
                <button onClick={checkList}>Check List</button>
              </div>
              <div className="num-ava">
                <FaRegEye />
              </div>
            </div>
            <div className="hp-account">
              <div className="num-account">
                <h3>Notification</h3>
                <p>0</p>
                <button onClick={checkNot}>Check Notification</button>
              </div>
              <div className="num-ava">
                <FaRegEnvelope />
              </div>
            </div>
            <div className="hp-account">
              <div className="num-account">
                <h3>Search </h3>
                <p>More Information</p>
                <button onClick={goSearch}>Go to search</button>
              </div>
              <div className="num-ava">
                <FaSearch />
              </div>
            </div>
          </div>
          <h1 class="title-img"> Import to</h1>
          <div class="img-ew">
            <img src="data:image/jpeg;base64,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Xf3w/mW4opcU3c1q4OFSTk2zJtk9l62Gthllp3NYxzi5xdEbAxvG4OvvIWsouKUrG1GgqSsjAMf+V1HnE/vHKPXvx1wNXOQbjj5zpr+8cvAsjgz7T6sIiKCgREQBERAEREAREQBERAEREAREQBERAEREAVk2S2qOH8YOJ40PLCf1mQtygjTkm+9VtFKdi8Jyg80dzWaXhJpHfGRys/pEg9Rv6lM0u1+Hyc2qYCfFJeM/6gFhqKc7PXHH1Fukz9EwVUcgux7XD+Rwd7F91+cG3abtNj0jQ+kKTpdoayLmVUo6nP4weh9wrZzeP+RXGPob5ddWNUnCDiDOc6N/1kYB9LCFM0vCe797Sg9ccn/qR/upzo2jjaT42NMRUym4RaF/PEsf0o8w9LCVMUu1FDLYMqo7nxOcGH0OsVN0bxrQltJGRYtXTRVlSIpZIwamckRvcwEiV+psdV5v05WeUy/bSfiuY64GqqCDcGqqCCNQQZXaheBYnBlOSk7Pi+PiSH6crPKZftpPxT9OVnlMv20n4qPRTcjPLm/Vkh+nKzymX7aT8Vx2M1ZFjVT2Onx0n4rwIlyM8ub9QiIoKhERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH//2Q=="></img>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAA9lBMVEUsWJf///8sWJgrWZf///1feJwlVpcmUpIuV5YuV5j//v8tWJUrWZVcdpvz+Pr8//9FYY4nTobd6vGNob4iTYsbTI6QpsiCnbyGn7iPpsCfscQuVpqbqruTqcdwiLEXR4AVR4V6j6pvia0eSo5NapW8ytq6xdBYc5y8yduhtM4iToo1VocnU4zq9vyptsIVQ3x5kKnU4OsMP35NbJC0wtXP3OspVIgdSHtbdpXm9P9gfKVHYovAxcquwNBxkLeeqLIAOG8XQHFoh6M/Y5iKmabf5ObP1twrT38ANHE6VntSbJzm7O2Boc3B2OmuwcuAnbhcfa5LcKhKl/OKAAAR5klEQVR4nO1cC2PaONa1JIIk5NjYsUvATewYKEHgtqSBNGTT/baZaTvttjP7///Md69sIA9n+5gyzU51Mg3GCR50uPfclxzHsbCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCw+DuDwT9aPVaHPzeU+a+EZeMO2I9+Aw8EdGUljDrSsmLAHKGU41LKhGAuBVLoT+9BFGmQrDwU1GHMUewnp4UJcBr4LqWkVIL3AB/qp3Ghez58NAzgBPjgUXaiXfFTiAqtMhBqDuk64gIbeJhIxblOg8nO3nh2qB0wmB/4Zv86rD76FSd0dVLwOAvaO0fjYegRwCF33Hs5WeV2fwswBkohjfMIKUAuYNlNruNo8uLo8TAskA3SaJAGOey793CiFAP8fRyLMQXhBYihjFFJp1F8Egzy7um8MMZBWqQEcBIz4O4uUISBUAbE/OjFfBcwJAW+KdehPHuWLkady/m5ZzhotfA72XASuRKt6jaUSyXD7O5v4ju4FOGAcJwE7UMQDn/NgA8Os2HE6Ik2a2fVl+NUB2AqrsvQq+QPXs13hJsfnM6KylMajTUXrRtmAho71cFdwDkdrdj4e3iP4zSXZtW+30AtLc3jGjMbO3k2Du/BnjYeeMN5yifXS2vH/Mo3J8J0cyl64+H7QzZ3kYNWC4OLIcLoyG1GgJOT4Z1zFfxBIm+/RboJz5AFo24JPPenhRhEHfxVSrjctsCc5s59S63lpLEGPmmVhrXLby5VUpG4oC8lJ1IIWIhQwIn65k8XsgQoRKlMMEKCtIOCqc+/6hv/V8DJHT+p5eTZkDSuUWI48Uub2uXujavCO282myZ0o8c0MdZL12n+CWtXMgEadHp2liSMuYxusxpFTr7CTu6gzk6UcEcvB8KkL0pcvXx5JZg7bQ/0N68DM2wmF93QLw4TIIRtNc59KSd5dtjdu4EuPO9VnLg3Yg51Bz45PzNrUfqSkINIymlBjvg3ywllrpsNSXH8cSSgCoOcW22dk8/yknMeR3F/gziK4mwEmnLXd1y19FtkyZEoNQlbZBwn0i38Dv/GN4nJpZouSXGRaVcNuodcOO7nX/atMJyUKTwGn8Y6nSebzB4PcqiCgJQbiIATVKOd23rCc/IP/zQVcFrDITnNqBLvlwpbMlgMMKrQ+h0qoK7AMsuYmUR1Nrk1CCiVAgMMM20bIx7ZmFym4Db6mHS5kFuUlJXvNMqI3CrFs1GdIyVJkLwcZq8e3cXY/MZtO0mi5+SfRTGBStrRQ/8XcpwxleizQGBzV2TZWZpq6ahpMOVpMIUlN/vpWZBxCLVKyGYWnaUZc4G3RKdBCuchdk3/7wl5/K+z6fRf5jGQ21NZ5KTVWqklcuKvGWmsUrhWGXfqJLaOE8n3yS9D0oFygA+8+UvyMVJu9JE81rDMeHAZ+n445jQak9eDmZ9zR4+G534xy1M0Hz4YFqQYXoHR6Db8rjfbD5poeqTl+yQ/gMID4t0YLrmtvHljJ+X6ypy+PGiZuqcUG4w7EHsbqy/kD1HHCYu7ZD8n8zRJNBwNyBysAhTycURdveeT8MkwPI2S6DH5xfO9XOg9QuZPhz451VBkDwoyfPomvEoozwsye/rEI/OANkdPfyVvnl6O8vIx50JsmZPKY5CKkiLjSw3f94oPvrGT+ljcaNRxosfk+VvPG3AZhF4bOAmkRE7iRB8Rfy/NouBKMd0j3mwQuHwHiMn62agge5pGPdI7QSl11RWcSLNsMiOXgSvePcEfKA5vZP8k5mp7yf31WOyjejS82Xw+DM1q/dejwfvfPGQIYvHebezv9+o1Vp+SI/C1rhY7ZJi1/fOFUsiJltmMdFMBSSmICNiJ1wYNyT6ScYpyfETCRRKdwtIhqjAFvjVMIcvRu77fVjIDTiKXsQg0NoJqfHsVZ8lJw+t2O0ehkY7xsyB4dwCHYORps8nL2AKxGKJOv/oyUQceR7UaK9M5eRnlZBZkQE408YuJS2P0neYAjhlT2MRywCKGmlE5KfxBE/O7tue/aOrXvn86SCFs6xnJI8hD3LMZXMVwoiEW6SHZiyF+ba87XNmJl0bxu4/mcMkpjXNzOM9cBSEQXQvzk5gjHStOuOEEf+02J04wA9vBpaYQfZpnvvcbWANywneAKEaZSKRacwI8vcXsnwa/ktec6aMC/s/gd2eFP1IYc9MhOdCO4QTieADPYqXc7Q3hDCcN4i+51Ad46J9BecImPsaicZ86J/MyP0lfHXRvAL2nZ/i6zQmdzryBA06wPyKXGtc2EGzNyQKbcxBUJHKSQYY68L0JUiKmIVBJE/62E5LiPT8793c4WEMCL93XToq+I8v8JBLbHEuWdtIi3RhkHhcfnuD4Lw3x5CtOZVqY+jev19hWncaKRegNGFzuyVMyAp0993dLTuKk7XsjbmaMjBo7oQlbnIMV0kTykV+0XRw5RiBG4yiagyKBgNBJQUaq5ASI0ChUprW+XU58/MTA2eHw8gQqLJYdo1AMIC8YlD2B3NTFNyIOMlIbi0W7KK4cNgm9D2HqgK7C513aCQOlGQa8mXAOYln6DgXRmQfa4eAix/BcQ3EUH5HjiP9OinbkNNMDcDi34gQc85KMsz9TY38hJ2AeqUMXBRx2YuEKGXVh1QW8w2ivzOa+JhbzC69YQEQ+heoPLpGCVpacaMp3PTLLLwZHr7RrOIHiSE7OyXz37WBIwgHke529djAKsWBcfCRh/rbd85HTihPmQspT5Mur7TWV1r5TtAV9FkKwuXD0v6+kg22V8IRiqmWytsMs79zFpi6+DjEg4ZQKviRk4ioKttHRpZ1AYN0J0SwhjaPa+A5VibiYl+famkk9Jz7mqRqEZDHErigJdyLJSo3F0XUbrkA6fHvDkyoWEz8HZT8Gewlk9BFEH/Il8KeEpudlLWjiThlu4Au/xX0e1cdiMbjsTilo5r9fRVDzRPufQC/i3z+9hsKF8nR58GmcT4TU+affp1RCCSjSUffTwftUKEXVYjn+9GigHWyqZe3Op4NlynGMUl4GikO12Ps0vtrinpiKkwbpxRJScjJ8xqbFay7B4DE1cgZeq+rbcx1dQwz/+v1RvZ2IOJamdxLhpgSmM55A8ZLxspQVkOhwWJLi/dipJogcrofnKE5l4cJY9iksCXUWcQoO5pQXwMsDPZnmW+cE1j3sJ1hnQSIw8oEMED6SaxV1SPnzw5o89npP6QYnuHZcEVo6dV3sorquk8iy9c6wAUDN6NEQUs3xhVO9SLkuMz0EM7o1/UuBbe51c4C5jhLO9gRlXQOG06R54UPGxo8gV6PR78RvMxafVlXgfRrr13CCn6sLHzmuG4ImOIcrYJ2gj+raxBA4UYpVZQs6ELZLkBPGqp1AzLyIuXgWiMImt/mJOXT+gv6JB/n1pPCuJFhIuHD40i8CR0JGarKQqlewisaNcj5WBp679Q6aB8P1MyXASHBcKBOwAhwrO+WYGSCTRK5nHhRNqRoT0SQxpxgQgc0lgYaFxiaMbcAlEuqwbWssjoePuKPnM5DYGYH6w1kU89RJLjx/0yv40lispNnTZEyerYY6Euf1+ElTQ07pCgxn77jJQ+HkVRi1QcNg5cuo2TVmGDZeVGkIvM5VWyRlFXdaEOhUdjzWYlJgdeME83GGuWiZnWGf7eAuavUE1u7im4alS5aAA+C+SShQGHNWs+bSDOAsEAEsma4j7ogyG5RXa63cgxm7gkIZ/q1ebcxtS4xsOMGMwY3HHc2xrhtHLLvsRNgKqzjJoQzOypCjq++x6VHX1TuSSdNwFdI1Q0CTh292TpYj+HLlDG0AjEXdztXXQ8PVLo7NFpfV+e0wcr1/Ei4kf/UHx0hDhimNHy1VAglU9dN83Zg2XyWy+lgMn3+SADMCNQJKYLT+W+utQM2gE0OwUdDroz26Gi6z9WYyp/4i3x1rjW3g2Pc/RmIb5PyMJX/8B1sbK+EA3+nWxWJS0ysANvABQw7kYOgRoJP4tGaPF/AANsVPUi0fzK6eNScgsn3cDnuCmbPfboKOJXzHX3Nyn8bW+I4zXSwwjKrFZCFBR+DpneEuGg5ywCCGCGd5XmDv7IFs7LnWezzNQOZl4GGKlscgkthhXv0QYvFqL8ZqYOybgddd3xGQ8WOnHl5N5jHU2KfYqNr8/Nr2C3QbCZ6zQ0ivT9nWus5fh43vkFkKgjhdmiA0jtH2049rg8jrZxl1vQK6CEk4YUxD+VgEgmYz0KpyioXuIcGhXJqARsIpjCiM4iaYXuRudTD+FVjbSYMUE3jb+pEp+ebPMMNchBtOssP9u+hhU+mO7+hj4r8QDF4NIsXlxCfHEVXKyCZmLAoKQ2kiMA4CIdNogo/2ogezd3JdA4Kg/JZl/XdD89mfv4V6o/m+mmwQUwOauu96GXhf3MF5DWSAI//Dr6QTYY7T0aimcXZ2lk0xvVDp2ZRnqYIagKdp2l9x8jBI2XACxnF5Od77YDjxL+CtvutsRsaH3MEOwQ3EcS0nVIx8yHD0Phm+IZdRPMaRBaV8cTA/D0+XGcSh9+fnu6OPsyvmZDvDcDZ+SQwnD8RQNr5TWUSjrIO989l8+GGzXecwWx4ZPC+/npsnXTMTul3v0EkI4oS95KdklmVznONRPjovrzQOmGh75BcfqKIZRnOffGg9PN/ZsGI2FzQqhhpmVLyKO3UaW89JNARxCkKSH5HiCnKccSadoCDe/mQANeWeFlBGef6wd8Uh4IT5BKcXD5ITJKBh5unr8ei1rrSZF1/fiFFtBqzLT0S0T8iLC69oXxB/ZwcbEGYm3DuR0QuPhAG98Br+zjMtsiHxd+Nmf++BcnLNWG4dmbhzTyyuizsOH3nk6DWZBWAc+x1SBNRJh8QbJVKdQdXd5uA7s2dQ3gbn4GRSJjsPmpP7UFcXj7uXtf1YJwG/ueyRsT6Zk6eXZJ6Bls5APqD4BW6I4WQIWqsWPpmnzOEPMRZft4vSP+7sGY54dHObUmT2KdXFYjeBdO3NG5LzqIePe1ww4MJfakX1DKQGOfmYAQVgJ5DV/S/YSZ3hHMamb2+60yZP0VrH/fq9W9iqJ94Hr+2InHieP4CcFbOU4ZnOjuBBS8MJc50+pP3dVJ8NkZOHEoprOGnV+tJhfLjfuVkUdzqdx/UzdIEZCsiJdCcejkewKZDOgY3nPY8UA1Fxwpxm2yf+fBz63sOxE4qctO6zjRuc3KuxyMnNglY6FJyC9DQ8QnVwqpETOjk2RfZsR1PkZJ5Bps+iHLsR3vMP+NsPgRN8U4aTL9hJfWcfdZXF4EtH/GaPTFIZdHrjJVeSm0fTnRV61O318oADP1fjHm4MhTcQtffG3UH6aPxqSh/C/YbYr2ju1t6GcQv3zDKqnXC7zdvXdRgochN7yzyOFINoK1xFmxwHW4kUQuiIi7JHL+I+dwXn0y1vGP9C4FvAexBarXoNucHJ7X0F6x81wE6qm7MruKa3ZjqtgiU4gTDDC6VAMbADh4MNxqrGoutiw16V9zA/AOdxSo39rJkYO7n07sFx4LIbf9IA53tUKOCEJrhPSyrXdbErj9M/bDnjufVtlRTHOeamsS2ObL4GtDny/M8QYpBHV+06XLSvIqcaU6yATWkqmBlwMdM+Ug58x/a9MRCcWLmsuq8Z29cKh4AQmn+865S7uVV72emtbpv9L5xo1WyK5m0IgR+/GVZdW5AUTnnrkRC4LxxnPYzhTE9I0JXydi+xHpHiQAg7TeKh3FFIcY6fRUF7Z391W+B6o31r1YAl2D9R93+Kn/l82Y2Bzvd771sFDmOBmSxoLw8uw8Inq53UZsdsuU+pj3dr/eg3+tdCClB/6vAMmBnl4+GslJlGtWMHfMfd4o7UBwlV/m0TnFNTMJnoJLtadi7nYSXALfAdc6/jTwTMlvAPneDInglhtkk0Y/wrDvne6Ryd6TDGMPqj3+dfinIoK8vbXqudDgryKwXEpJNBPv4DbyP6iTihTrlNZLUZwoyvhbkR0ex1kAmPv/1Wvv9NXJPOn2zlFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFj8h/h8cT5E9A6m11gAAAABJRU5ErkJggg=="></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
