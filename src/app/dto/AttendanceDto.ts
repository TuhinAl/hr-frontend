import {prop} from "@rxweb/reactive-form-validators";

export class AttendanceDto {

  @prop() id: string | null = null;
  @prop() employeeId: string | null = null;
  @prop() employeeNcId: string | null = null;
  @prop() weekDay: string | null = null;
  @prop() checkInOutTypeKey: string | null = null;
  @prop() attendanceEntryTypeKey: string | null = null;
  @prop() attendanceEntryTypeValue: string | null = null;
  @prop() attendanceLeaveTypeKey: string | null = null;
  @prop() attendanceLeaveTypeValue: string | null = null;
  @prop() entryTypeKey: string | null = null;
  @prop() entryTypeValue: string | null = null;
  @prop() lateReason: string | null = null;
  @prop() leaveTypeKey: string | null = null;
  @prop() leaveTypeValue: string | null = null;
  @prop() earlyLeaveMinutes: string | null = null;
  @prop() inTimeAt: string | null = null;
  @prop() outTimeAt: string | null = null;
  @prop() isAlreadyCheckedIn: string | null = null;
  @prop() isAlreadyCheckedOut: string | null = null;

  constructor(o?: Partial<AttendanceDto>) {
    Object.assign(this, o);
  }
}
