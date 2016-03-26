// namespace
var Membership;
(function (Membership) {
    function AddMember(name) {
    }
    Membership.AddMember = AddMember;
    function AddMember2(name) {
    }
    Membership.AddMember2 = AddMember2;
    var Cards;
    (function (Cards) {
        function IssueCard() { }
        Cards.IssueCard = IssueCard;
    })(Cards = Membership.Cards || (Membership.Cards = {}));
})(Membership || (Membership = {}));
Membership.AddMember('test');
Membership.Cards.IssueCard();
//# sourceMappingURL=namespace.js.map