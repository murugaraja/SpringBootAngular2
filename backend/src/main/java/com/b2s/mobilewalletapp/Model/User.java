package com.b2s.mobilewalletapp.Model;


import java.util.Date;

/**
 * Created by rmuruganantham on 4/5/2017.
 */
public class User {

    public String memberId;
    public String accountId;
    public String pointBalance;
    public String firstName;
    public String middleInitial;
    public String lastName;
    public String cellPhone;
    public String email;
    public String customRewardsEligibility;
    public String memberStatus;
    public String token;
    public String programId;
    public String varProgram;

    public String getMemberId() {
        return memberId;
    }

    public void setMemberId(String memberId) {
        this.memberId = memberId;
    }

    public String getAccountId() {
        return accountId;
    }

    public void setAccountId(String accountId) {
        this.accountId = accountId;
    }

    public String getPointBalance() {
        return pointBalance;
    }

    public void setPointBalance(String pointBalance) {
        this.pointBalance = pointBalance;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getMiddleInitial() {
        return middleInitial;
    }

    public void setMiddleInitial(String middleInitial) {
        this.middleInitial = middleInitial;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getCellPhone() {
        return cellPhone;
    }

    public void setCellPhone(String cellPhone) {
        this.cellPhone = cellPhone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCustomRewardsEligibility() {
        return customRewardsEligibility;
    }

    public void setCustomRewardsEligibility(String customRewardsEligibility) {
        this.customRewardsEligibility = customRewardsEligibility;
    }

    public String getMemberStatus() {
        return memberStatus;
    }

    public void setMemberStatus(String memberStatus) {
        this.memberStatus = memberStatus;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getProgramId() {
        return programId;
    }

    public void setProgramId(String programId) {
        this.programId = programId;
    }

    public String getVarProgram() {
        return varProgram;
    }

    public void setVarProgram(String varProgram) {
        this.varProgram = varProgram;
    }
}
