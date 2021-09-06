import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: any;
  /**
   * Create scalar that ignores normal serialization/deserialization, since
   * that will be handled by the multipart request spec
   */
  Upload: any;
};



export type BadColorReason = BusinessLogicNode & {
  __typename?: 'BadColorReason';
  /** The ID of the object */
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  toothSet: ToothConnection;
  _id?: Maybe<Scalars['Int']>;
};


export type BadColorReasonToothSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  toothNumber_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  toothService_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cl_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  isBadColor_In?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  badColorReason_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedService_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type BadColorReasonConnection = {
  __typename?: 'BadColorReasonConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<BadColorReasonEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
  edgeCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `BadColorReason` and its cursor. */
export type BadColorReasonEdge = {
  __typename?: 'BadColorReasonEdge';
  /** The item at the end of the edge */
  node?: Maybe<BadColorReason>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** An enumeration. */
export enum BusinesslogicOrderStatusChoices {
  /** Sent */
  Sent = 'SENT',
  /** Invoice Ready */
  ProcessingInvoiceReady = 'PROCESSING_INVOICE_READY',
  /** Accept */
  ProcessingAccept = 'PROCESSING_ACCEPT',
  /** Reject */
  ProcessingReject = 'PROCESSING_REJECT',
  /** Reject And Resend */
  ProcessingRejectAndResend = 'PROCESSING_REJECT_AND_RESEND',
  /** Molding */
  ProcessingMolding = 'PROCESSING_MOLDING',
  /** Ditch */
  ProcessingDitch = 'PROCESSING_DITCH',
  /** Scan */
  ProcessingScan = 'PROCESSING_SCAN',
  /** Water Wax */
  ProcessingWaterWax = 'PROCESSING_WATER_WAX',
  /** Designing */
  ProcessingDesigning = 'PROCESSING_DESIGNING',
  /** Print/Milling */
  ProcessingPrintMilling = 'PROCESSING_PRINT_MILLING',
  /** Ceramic */
  ProcessingCeramic = 'PROCESSING_CERAMIC',
  /** ready */
  Ready = 'READY'
}

/** An enumeration. */
export enum BusinesslogicTicketMessgaeStatusChoices {
  /** Read */
  Read = 'READ',
  /** Unread */
  Unread = 'UNREAD'
}

export type ChangePassword = {
  __typename?: 'ChangePassword';
  status?: Maybe<Scalars['String']>;
};

export type CreateDevice = {
  __typename?: 'CreateDevice';
  status?: Maybe<Scalars['String']>;
};

export type CreateInvoiceInput = {
  actualDate?: Maybe<Scalars['Date']>;
  price?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  relatedOrder: Scalars['ID'];
  recieptImage?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateInvoicePayload = {
  __typename?: 'CreateInvoicePayload';
  invoice?: Maybe<InvoiceType>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateLab = {
  __typename?: 'CreateLab';
  user?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type CreateOrderInput = {
  expectedDate?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  finalizedLab?: Maybe<Scalars['ID']>;
  relatedService?: Maybe<Scalars['ID']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateOrderPayload = {
  __typename?: 'CreateOrderPayload';
  order?: Maybe<OrderType>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  service?: Maybe<OrderType>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreatePatient = {
  __typename?: 'CreatePatient';
  user?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type CreateServiceInput = {
  relatedDoctor: Scalars['ID'];
  relatedPatient: Scalars['ID'];
  category?: Maybe<Scalars['ID']>;
  relatedSmileDesign?: Maybe<Scalars['ID']>;
  centralSize?: Maybe<Scalars['Int']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateServicePayload = {
  __typename?: 'CreateServicePayload';
  service?: Maybe<ServiceType>;
  errors?: Maybe<Array<Maybe<ErrorType>>>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTicket = {
  __typename?: 'CreateTicket';
  status?: Maybe<Scalars['String']>;
};

export type CreateUser = {
  __typename?: 'CreateUser';
  user?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type DashboardMessage = ExtendProfileNode & {
  __typename?: 'DashboardMessage';
  /** The ID of the object */
  id: Scalars['ID'];
  message: Scalars['String'];
  _id?: Maybe<Scalars['Int']>;
};

export type DashboardMessageConnection = {
  __typename?: 'DashboardMessageConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DashboardMessageEdge>>;
};

/** A Relay edge containing a `DashboardMessage` and its cursor. */
export type DashboardMessageEdge = {
  __typename?: 'DashboardMessageEdge';
  /** The item at the end of the edge */
  node?: Maybe<DashboardMessage>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};



export type DeletePatient = {
  __typename?: 'DeletePatient';
  status?: Maybe<Scalars['String']>;
};

export type DeletePatientPic = {
  __typename?: 'DeletePatientPic';
  status?: Maybe<Scalars['String']>;
};

export type Doctor = BusinessLogicNode & {
  __typename?: 'Doctor';
  /** The ID of the object */
  id: Scalars['ID'];
  relatedProfile: Profile;
  rating: Scalars['Float'];
  rateSize: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  smileDesigns: SmileDesignServiceConnection;
  patientSet: Array<PatientType>;
  services: Array<ServiceType>;
  _id?: Maybe<Scalars['Int']>;
};


export type DoctorSmileDesignsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  service_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  relatedSmileColor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedSmileCategory_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  patient_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  doctor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  shape_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  width_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  heigth_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type DoctorConnection = {
  __typename?: 'DoctorConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<DoctorEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
  edgeCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `Doctor` and its cursor. */
export type DoctorEdge = {
  __typename?: 'DoctorEdge';
  /** The item at the end of the edge */
  node?: Maybe<Doctor>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ErrorType = {
  __typename?: 'ErrorType';
  field: Scalars['String'];
  messages: Array<Scalars['String']>;
};

/** An enumeration. */
export enum ExtendprofileProfileGenderChoices {
  /** Male */
  Male = 'MALE',
  /** Female */
  Female = 'FEMALE',
  /** Unknown */
  Unknown = 'UNKNOWN'
}

/** An enumeration. */
export enum ExtendprofileProfileRoleChoices {
  /** Doctor */
  Doctor = 'DOCTOR',
  /** Patient */
  Patient = 'PATIENT',
  /** Lab */
  Lab = 'LAB'
}

/** An enumeration. */
export enum ExtendprofileProfileStatusChoices {
  /** Active */
  Active = 'ACTIVE',
  /** Deactive */
  Deactive = 'DEACTIVE',
  /** Freetrial */
  Freetrial = 'FREETRIAL',
  /** Banned */
  Banned = 'BANNED'
}

export type FaceShape = SmileDesignNode & {
  __typename?: 'FaceShape';
  /** The ID of the object */
  id: Scalars['ID'];
  name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  smiledesignserviceSet: SmileDesignServiceConnection;
  _id?: Maybe<Scalars['Int']>;
};


export type FaceShapeSmiledesignserviceSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  service_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  relatedSmileColor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedSmileCategory_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  patient_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  doctor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  shape_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  width_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  heigth_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type FaceShapeConnection = {
  __typename?: 'FaceShapeConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<FaceShapeEdge>>;
};

/** A Relay edge containing a `FaceShape` and its cursor. */
export type FaceShapeEdge = {
  __typename?: 'FaceShapeEdge';
  /** The item at the end of the edge */
  node?: Maybe<FaceShape>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ForgetPass = {
  __typename?: 'ForgetPass';
  status?: Maybe<Scalars['String']>;
};


export type Invoice = BusinessLogicNode & {
  __typename?: 'Invoice';
  /** The ID of the object */
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  actualDate?: Maybe<Scalars['Date']>;
  price?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  relatedOrder: OrderType;
  recieptImage?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['Int']>;
};

export type InvoiceConnection = {
  __typename?: 'InvoiceConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<InvoiceEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
  edgeCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `Invoice` and its cursor. */
export type InvoiceEdge = {
  __typename?: 'InvoiceEdge';
  /** The item at the end of the edge */
  node?: Maybe<Invoice>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type InvoiceType = {
  __typename?: 'InvoiceType';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  actualDate?: Maybe<Scalars['Date']>;
  price?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  relatedOrder: OrderType;
  recieptImage?: Maybe<Scalars['String']>;
};


export type Lab = BusinessLogicNode & {
  __typename?: 'Lab';
  /** The ID of the object */
  id: Scalars['ID'];
  relatedProfile: Profile;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  rating: Scalars['Float'];
  rateSize: Scalars['Int'];
  orderSet: Array<OrderType>;
  labPics?: Maybe<LabPic>;
  _id?: Maybe<Scalars['Int']>;
};

export type LabConnection = {
  __typename?: 'LabConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LabEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
  edgeCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `Lab` and its cursor. */
export type LabEdge = {
  __typename?: 'LabEdge';
  /** The item at the end of the edge */
  node?: Maybe<Lab>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type LabPic = BusinessLogicNode & {
  __typename?: 'LabPic';
  /** The ID of the object */
  id: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  pic?: Maybe<Scalars['String']>;
  lab: Lab;
  number?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['Int']>;
};

export type LabPicConnection = {
  __typename?: 'LabPicConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LabPicEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
  edgeCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `LabPic` and its cursor. */
export type LabPicEdge = {
  __typename?: 'LabPicEdge';
  /** The item at the end of the edge */
  node?: Maybe<LabPic>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type LabPicMutation = {
  __typename?: 'LabPicMutation';
  status?: Maybe<Scalars['String']>;
};

export type Log = BusinessLogicNode & {
  __typename?: 'Log';
  /** The ID of the object */
  id: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  relatedOrder: OrderType;
  status: Scalars['String'];
  message?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['Int']>;
};

export type LogConnection = {
  __typename?: 'LogConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<LogEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
  edgeCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `Log` and its cursor. */
export type LogEdge = {
  __typename?: 'LogEdge';
  /** The item at the end of the edge */
  node?: Maybe<Log>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Mutations = {
  __typename?: 'Mutations';
  updateSmileDesign?: Maybe<UpdateSmileDesign>;
  createDevice?: Maybe<CreateDevice>;
  createLab?: Maybe<CreateLab>;
  createPatient?: Maybe<CreatePatient>;
  deletePatient?: Maybe<DeletePatient>;
  updatePatientPic?: Maybe<UpdatePatientPic>;
  deletePatientPic?: Maybe<DeletePatientPic>;
  updateOrder?: Maybe<UpdateOrder>;
  createOrder?: Maybe<CreateOrderPayload>;
  createInvoice?: Maybe<CreateInvoicePayload>;
  labpicMutation?: Maybe<LabPicMutation>;
  updateLabRate?: Maybe<UpdateLabRate>;
  createService?: Maybe<CreateServicePayload>;
  toothMutation?: Maybe<ToothMutation>;
  toothMutationJson?: Maybe<ToothMutationJson>;
  createTicker?: Maybe<CreateTicket>;
  tokenAuth?: Maybe<ObtainJsonWebToken>;
  verifyToken?: Maybe<Verify>;
  refreshToken?: Maybe<Refresh>;
  createUser?: Maybe<CreateUser>;
  verifyUser?: Maybe<VerifyUser>;
  requestOtp?: Maybe<RequestOtp>;
  updateProfile?: Maybe<UpdateProfile>;
  changePassword?: Maybe<ChangePassword>;
  forgetPass?: Maybe<ForgetPass>;
};


export type MutationsUpdateSmileDesignArgs = {
  doctorId: Scalars['Int'];
  patientId: Scalars['Int'];
  smileCategory?: Maybe<Scalars['String']>;
  smileColor?: Maybe<Scalars['String']>;
  smileDesignImages?: Maybe<SmileDesignImages>;
  smileDesignState?: Maybe<Scalars['String']>;
};


export type MutationsCreateDeviceArgs = {
  ProfileId: Scalars['ID'];
  deviceId: Scalars['String'];
};


export type MutationsCreateLabArgs = {
  address?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
  telephoneNumber?: Maybe<Scalars['String']>;
};


export type MutationsCreatePatientArgs = {
  address?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  patientPics?: Maybe<PatientPics>;
  phoneNumber: Scalars['String'];
  profileDoctorId: Scalars['Int'];
};


export type MutationsDeletePatientArgs = {
  patientId: Scalars['Int'];
};


export type MutationsUpdatePatientPicArgs = {
  doctorId?: Maybe<Scalars['Int']>;
  patientId: Scalars['Int'];
  patientPics: PatientPics;
};


export type MutationsDeletePatientPicArgs = {
  patientId: Scalars['Int'];
  selectedFields?: Maybe<PatientPicsDeletion>;
};


export type MutationsUpdateOrderArgs = {
  description?: Maybe<Scalars['String']>;
  expectedDate?: Maybe<Scalars['DateTime']>;
  finalizedLab?: Maybe<Scalars['ID']>;
  orderId: Scalars['ID'];
  relatedService?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
};


export type MutationsCreateOrderArgs = {
  input: CreateOrderInput;
};


export type MutationsCreateInvoiceArgs = {
  input: CreateInvoiceInput;
};


export type MutationsLabpicMutationArgs = {
  labId: Scalars['ID'];
  pic: Scalars['Upload'];
  picNumber: Scalars['Int'];
};


export type MutationsUpdateLabRateArgs = {
  labId: Scalars['Int'];
  rate: Scalars['Float'];
};


export type MutationsCreateServiceArgs = {
  input: CreateServiceInput;
};


export type MutationsToothMutationArgs = {
  relatedService: Scalars['ID'];
  teeth?: Maybe<Array<Maybe<TeethInput>>>;
};


export type MutationsToothMutationJsonArgs = {
  centralSize?: Maybe<Scalars['String']>;
  jsonObject?: Maybe<Scalars['JSONString']>;
  relatedService: Scalars['ID'];
};


export type MutationsCreateTickerArgs = {
  message: Scalars['String'];
  receiverProfile: Scalars['Int'];
  relatedOrder: Scalars['Int'];
  senderProfile: Scalars['Int'];
};


export type MutationsTokenAuthArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationsVerifyTokenArgs = {
  token?: Maybe<Scalars['String']>;
};


export type MutationsRefreshTokenArgs = {
  refreshToken?: Maybe<Scalars['String']>;
};


export type MutationsCreateUserArgs = {
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationsVerifyUserArgs = {
  otpMessage: Scalars['String'];
  username: Scalars['String'];
};


export type MutationsRequestOtpArgs = {
  username: Scalars['String'];
};


export type MutationsUpdateProfileArgs = {
  address?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  profilePic?: Maybe<Scalars['Upload']>;
  status?: Maybe<Scalars['String']>;
  telephoneNumber?: Maybe<Scalars['String']>;
};


export type MutationsChangePasswordArgs = {
  newPassword: Scalars['String'];
  username: Scalars['String'];
};


export type MutationsForgetPassArgs = {
  phoneNumber: Scalars['String'];
};

export type NotifReceiver = NotificationNode & {
  __typename?: 'NotifReceiver';
  /** The ID of the object */
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  deviceId: Scalars['String'];
  profile?: Maybe<Profile>;
  notifications: NotificationConnection;
  _id?: Maybe<Scalars['Int']>;
};


export type NotifReceiverNotificationsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  notifService_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  reportUrl_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  notifId_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  receivers_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
};

export type NotifReceiverConnection = {
  __typename?: 'NotifReceiverConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<NotifReceiverEdge>>;
};

/** A Relay edge containing a `NotifReceiver` and its cursor. */
export type NotifReceiverEdge = {
  __typename?: 'NotifReceiverEdge';
  /** The item at the end of the edge */
  node?: Maybe<NotifReceiver>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type NotifService = NotificationNode & {
  __typename?: 'NotifService';
  /** The ID of the object */
  id: Scalars['ID'];
  objectType: NotificationNotifServiceObjectTypeChoices;
  objectId: Scalars['Int'];
  notificationSet: NotificationConnection;
  _id?: Maybe<Scalars['Int']>;
};


export type NotifServiceNotificationSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  notifService_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  reportUrl_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  notifId_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  receivers_In?: Maybe<Array<Maybe<Array<Maybe<Scalars['ID']>>>>>;
};

export type NotifServiceConnection = {
  __typename?: 'NotifServiceConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<NotifServiceEdge>>;
};

/** A Relay edge containing a `NotifService` and its cursor. */
export type NotifServiceEdge = {
  __typename?: 'NotifServiceEdge';
  /** The item at the end of the edge */
  node?: Maybe<NotifService>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Notification = NotificationNode & {
  __typename?: 'Notification';
  /** The ID of the object */
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  message: Scalars['String'];
  receivers: NotifReceiverConnection;
  notifService?: Maybe<NotifService>;
  status?: Maybe<NotificationNotificationStatusChoices>;
  reportUrl?: Maybe<Scalars['String']>;
  notifId?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['Int']>;
};


export type NotificationReceiversArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  notifications_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  deviceId_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  profile_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type NotificationConnection = {
  __typename?: 'NotificationConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<NotificationEdge>>;
};

/** A Relay edge containing a `Notification` and its cursor. */
export type NotificationEdge = {
  __typename?: 'NotificationEdge';
  /** The item at the end of the edge */
  node?: Maybe<Notification>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** An enumeration. */
export enum NotificationNotifServiceObjectTypeChoices {
  /** INVOICE */
  Invoice = 'INVOICE',
  /** ORDER */
  Order = 'ORDER'
}

/** An enumeration. */
export enum NotificationNotificationStatusChoices {
  /** SUCCESS */
  Success = 'SUCCESS',
  /** FAILED */
  Failed = 'FAILED'
}

export type Otp = ExtendProfileNode & {
  __typename?: 'OTP';
  /** The ID of the object */
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  isValid: Scalars['Boolean'];
  profile?: Maybe<Profile>;
  _id?: Maybe<Scalars['Int']>;
};

export type OtpConnection = {
  __typename?: 'OTPConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OtpEdge>>;
};

/** A Relay edge containing a `OTP` and its cursor. */
export type OtpEdge = {
  __typename?: 'OTPEdge';
  /** The item at the end of the edge */
  node?: Maybe<Otp>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ObtainJsonWebToken = {
  __typename?: 'ObtainJSONWebToken';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  profile?: Maybe<Scalars['String']>;
  token: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type Order = BusinessLogicNode & {
  __typename?: 'Order';
  /** The ID of the object */
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['Date'];
  expectedDate?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  status: BusinesslogicOrderStatusChoices;
  finalizedLab?: Maybe<Lab>;
  relatedService?: Maybe<ServiceType>;
  invoice?: Maybe<InvoiceType>;
  logs: LogConnection;
  ticketSet: TicketConnection;
  _id?: Maybe<Scalars['Int']>;
};


export type OrderLogsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  relatedOrder_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OrderTicketSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  sender_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  receiver_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedOrder_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  messgaeStatus_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type OrderConnection = {
  __typename?: 'OrderConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<OrderEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
  edgeCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `Order` and its cursor. */
export type OrderEdge = {
  __typename?: 'OrderEdge';
  /** The item at the end of the edge */
  node?: Maybe<Order>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type OrderType = {
  __typename?: 'OrderType';
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['Date'];
  expectedDate?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  status: BusinesslogicOrderStatusChoices;
  finalizedLab?: Maybe<Lab>;
  relatedService?: Maybe<ServiceType>;
  invoice?: Maybe<InvoiceType>;
  logs: LogConnection;
  ticketSet: TicketConnection;
};


export type OrderTypeLogsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  relatedOrder_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type OrderTypeTicketSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  sender_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  receiver_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedOrder_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  messgaeStatus_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type Patient = BusinessLogicNode & {
  __typename?: 'Patient';
  /** The ID of the object */
  id: Scalars['ID'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  relatedProfile: Profile;
  doctor: DoctorConnection;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  smileDesigns: SmileDesignServiceConnection;
  serviceSet: Array<ServiceType>;
  patientPic?: Maybe<PatientPic>;
  _id?: Maybe<Scalars['Int']>;
};


export type PatientDoctorArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  patient_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  services_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  smileDesigns_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedProfile_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  rating_In?: Maybe<Array<Maybe<Scalars['Float']>>>;
  rateSize_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};


export type PatientSmileDesignsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  service_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  relatedSmileColor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedSmileCategory_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  patient_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  doctor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  shape_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  width_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  heigth_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type PatientConnection = {
  __typename?: 'PatientConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PatientEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
  edgeCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `Patient` and its cursor. */
export type PatientEdge = {
  __typename?: 'PatientEdge';
  /** The item at the end of the edge */
  node?: Maybe<Patient>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PatientPic = BusinessLogicNode & {
  __typename?: 'PatientPic';
  /** The ID of the object */
  id: Scalars['ID'];
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  smileImage?: Maybe<Scalars['String']>;
  fullSmileImage?: Maybe<Scalars['String']>;
  sideImage?: Maybe<Scalars['String']>;
  optionalImage?: Maybe<Scalars['String']>;
  patient?: Maybe<PatientType>;
  _id?: Maybe<Scalars['Int']>;
};

export type PatientPicConnection = {
  __typename?: 'PatientPicConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<PatientPicEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
  edgeCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `PatientPic` and its cursor. */
export type PatientPicEdge = {
  __typename?: 'PatientPicEdge';
  /** The item at the end of the edge */
  node?: Maybe<PatientPic>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PatientType = {
  __typename?: 'PatientType';
  id: Scalars['ID'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  relatedProfile: Profile;
  doctor: DoctorConnection;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  smileDesigns: SmileDesignServiceConnection;
  serviceSet: Array<ServiceType>;
  patientPic?: Maybe<PatientPic>;
};


export type PatientTypeDoctorArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  patient_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  services_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  smileDesigns_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedProfile_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  rating_In?: Maybe<Array<Maybe<Scalars['Float']>>>;
  rateSize_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};


export type PatientTypeSmileDesignsArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  service_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  relatedSmileColor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedSmileCategory_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  patient_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  doctor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  shape_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  width_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  heigth_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Profile = ExtendProfileNode & {
  __typename?: 'Profile';
  /** The ID of the object */
  id: Scalars['ID'];
  role: ExtendprofileProfileRoleChoices;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  profilePic?: Maybe<Scalars['String']>;
  gender?: Maybe<ExtendprofileProfileGenderChoices>;
  age?: Maybe<Scalars['Int']>;
  status: ExtendprofileProfileStatusChoices;
  phoneNumber?: Maybe<Scalars['String']>;
  telephoneNumber?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  OTP: OtpConnection;
  notifreceiver?: Maybe<NotifReceiver>;
  doctor?: Maybe<Doctor>;
  patient?: Maybe<PatientType>;
  lab?: Maybe<Lab>;
  sender: TicketConnection;
  receiver: TicketConnection;
  _id?: Maybe<Scalars['Int']>;
};


export type ProfileOtpArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  message?: Maybe<Scalars['String']>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  isValid?: Maybe<Scalars['Boolean']>;
  isValid_In?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  profile?: Maybe<Scalars['ID']>;
  profile_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
};


export type ProfileSenderArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  sender_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  receiver_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedOrder_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  messgaeStatus_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type ProfileReceiverArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  sender_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  receiver_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedOrder_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  messgaeStatus_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ProfileConnection = {
  __typename?: 'ProfileConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ProfileEdge>>;
};

/** A Relay edge containing a `Profile` and its cursor. */
export type ProfileEdge = {
  __typename?: 'ProfileEdge';
  /** The item at the end of the edge */
  node?: Maybe<Profile>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getReport?: Maybe<Array<Maybe<ReportNode>>>;
  NotifService?: Maybe<NotifService>;
  allNotifservice?: Maybe<NotifServiceConnection>;
  NotifReceiver?: Maybe<NotifReceiver>;
  allNotifreceiver?: Maybe<NotifReceiverConnection>;
  Notification?: Maybe<Notification>;
  allNotification?: Maybe<NotificationConnection>;
  Profile?: Maybe<Profile>;
  allProfile?: Maybe<ProfileConnection>;
  DashboardMessage?: Maybe<DashboardMessage>;
  allDashboardmessage?: Maybe<DashboardMessageConnection>;
  OTP?: Maybe<Otp>;
  allOtp?: Maybe<OtpConnection>;
  SmileCategory?: Maybe<SmileCategory>;
  allSmilecategory?: Maybe<SmileCategoryConnection>;
  SmileColor?: Maybe<SmileColor>;
  allSmilecolor?: Maybe<SmileColorConnection>;
  FaceShape?: Maybe<FaceShape>;
  allFaceshape?: Maybe<FaceShapeConnection>;
  SmileDesignService?: Maybe<SmileDesignService>;
  allSmiledesignservice?: Maybe<SmileDesignServiceConnection>;
  ServiceCategory?: Maybe<ServiceCategory>;
  allServicecategory?: Maybe<ServiceCategoryConnection>;
  Doctor?: Maybe<Doctor>;
  allDoctor?: Maybe<DoctorConnection>;
  Patient?: Maybe<Patient>;
  allPatient?: Maybe<PatientConnection>;
  Lab?: Maybe<Lab>;
  allLab?: Maybe<LabConnection>;
  Service?: Maybe<Service>;
  allService?: Maybe<ServiceConnection>;
  ToothSevice?: Maybe<ToothSevice>;
  allToothsevice?: Maybe<ToothSeviceConnection>;
  BadColorReason?: Maybe<BadColorReason>;
  allBadcolorreason?: Maybe<BadColorReasonConnection>;
  Tooth?: Maybe<Tooth>;
  allTooth?: Maybe<ToothConnection>;
  Order?: Maybe<Order>;
  allOrder?: Maybe<OrderConnection>;
  Invoice?: Maybe<Invoice>;
  allInvoice?: Maybe<InvoiceConnection>;
  PatientPic?: Maybe<PatientPic>;
  allPatientpic?: Maybe<PatientPicConnection>;
  Log?: Maybe<Log>;
  allLog?: Maybe<LogConnection>;
  Ticket?: Maybe<Ticket>;
  allTicket?: Maybe<TicketConnection>;
  LabPic?: Maybe<LabPic>;
  allLabpic?: Maybe<LabPicConnection>;
};


export type QueryGetReportArgs = {
  labId?: Maybe<Scalars['Int']>;
};


export type QueryNotifServiceArgs = {
  id: Scalars['ID'];
};


export type QueryAllNotifserviceArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  notification?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  objectType?: Maybe<Scalars['String']>;
  objectId?: Maybe<Scalars['Int']>;
  notification_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  objectType_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  objectId_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryNotifReceiverArgs = {
  id: Scalars['ID'];
};


export type QueryAllNotifreceiverArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  notifications?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  deviceId?: Maybe<Scalars['String']>;
  profile?: Maybe<Scalars['ID']>;
  notifications_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  deviceId_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  profile_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryNotificationArgs = {
  id: Scalars['ID'];
};


export type QueryAllNotificationArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  message?: Maybe<Scalars['String']>;
  notifService?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  reportUrl?: Maybe<Scalars['String']>;
  notifId?: Maybe<Scalars['String']>;
  receivers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  notifService_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  reportUrl_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  notifId_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  receivers_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryProfileArgs = {
  id: Scalars['ID'];
};


export type QueryAllProfileArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  doctor?: Maybe<Scalars['ID']>;
  patient?: Maybe<Scalars['ID']>;
  lab?: Maybe<Scalars['ID']>;
  sender?: Maybe<Array<Maybe<Scalars['ID']>>>;
  receiver?: Maybe<Array<Maybe<Scalars['ID']>>>;
  OTP?: Maybe<Array<Maybe<Scalars['ID']>>>;
  notifreceiver?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  user?: Maybe<Scalars['ID']>;
  role?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  age?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  telephoneNumber?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  doctor_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  patient_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  lab_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  sender_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  receiver_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  OTP_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  notifreceiver_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  user_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  role_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  age_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneNumber_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  telephoneNumber_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryDashboardMessageArgs = {
  id: Scalars['ID'];
};


export type QueryAllDashboardmessageArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryOtpArgs = {
  id: Scalars['ID'];
};


export type QueryAllOtpArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  isValid?: Maybe<Scalars['Boolean']>;
  profile?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  isValid_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  profile_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QuerySmileCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryAllSmilecategoryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  smiledesignservice?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  path?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
  numchild?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  smiledesignservice_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  path_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  depth_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  numchild_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QuerySmileColorArgs = {
  id: Scalars['ID'];
};


export type QueryAllSmilecolorArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  smiledesignservice?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  path?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
  numchild?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  smiledesignservice_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  path_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  depth_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  numchild_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryFaceShapeArgs = {
  id: Scalars['ID'];
};


export type QueryAllFaceshapeArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  smiledesignservice?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  smiledesignservice_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QuerySmileDesignServiceArgs = {
  id: Scalars['ID'];
};


export type QueryAllSmiledesignserviceArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  service?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  relatedSmileColor?: Maybe<Scalars['ID']>;
  relatedSmileCategory?: Maybe<Scalars['ID']>;
  patient?: Maybe<Scalars['ID']>;
  doctor?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  shape?: Maybe<Scalars['ID']>;
  width?: Maybe<Scalars['Int']>;
  heigth?: Maybe<Scalars['Int']>;
  service_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedSmileColor_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedSmileCategory_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  patient_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  doctor_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  shape_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  width_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  heigth_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryServiceCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryAllServicecategoryArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  service?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  path?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
  numchild?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  service_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  path_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  depth_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  numchild_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryDoctorArgs = {
  id: Scalars['ID'];
};


export type QueryAllDoctorArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  patient?: Maybe<Array<Maybe<Scalars['ID']>>>;
  services?: Maybe<Array<Maybe<Scalars['ID']>>>;
  smileDesigns?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  relatedProfile?: Maybe<Scalars['ID']>;
  rating?: Maybe<Scalars['Float']>;
  rateSize?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  patient_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  services_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  smileDesigns_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedProfile_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  rating_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  rateSize_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  sortByRate?: Maybe<Scalars['String']>;
};


export type QueryPatientArgs = {
  id: Scalars['ID'];
};


export type QueryAllPatientArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  service?: Maybe<Array<Maybe<Scalars['ID']>>>;
  patientPic?: Maybe<Scalars['ID']>;
  smileDesigns?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  deletedAt?: Maybe<Scalars['DateTime']>;
  relatedProfile?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  doctor?: Maybe<Array<Maybe<Scalars['ID']>>>;
  service_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  patientPic_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  smileDesigns_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  deletedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedProfile_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  doctor_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  searchByName?: Maybe<Scalars['String']>;
};


export type QueryLabArgs = {
  id: Scalars['ID'];
};


export type QueryAllLabArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  order?: Maybe<Array<Maybe<Scalars['ID']>>>;
  labPics?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  relatedProfile?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  rating?: Maybe<Scalars['Float']>;
  rateSize?: Maybe<Scalars['Int']>;
  order_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  labPics_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedProfile_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  rating_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  rateSize_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  searchByName?: Maybe<Scalars['String']>;
  sortByRate?: Maybe<Scalars['String']>;
};


export type QueryServiceArgs = {
  id: Scalars['ID'];
};


export type QueryAllServiceArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  Teeth?: Maybe<Array<Maybe<Scalars['ID']>>>;
  orders?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  relatedDoctor?: Maybe<Scalars['ID']>;
  relatedPatient?: Maybe<Scalars['ID']>;
  category?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  relatedSmileDesign?: Maybe<Scalars['ID']>;
  centralSize?: Maybe<Scalars['Int']>;
  Teeth_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  orders_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedDoctor_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedPatient_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  category_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedSmileDesign_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  centralSize_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryToothSeviceArgs = {
  id: Scalars['ID'];
};


export type QueryAllToothseviceArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  tooth?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  tooth_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryBadColorReasonArgs = {
  id: Scalars['ID'];
};


export type QueryAllBadcolorreasonArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  tooth?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  tooth_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryToothArgs = {
  id: Scalars['ID'];
};


export type QueryAllToothArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  toothNumber?: Maybe<Scalars['Int']>;
  toothService?: Maybe<Scalars['ID']>;
  cl?: Maybe<Scalars['Int']>;
  isBadColor?: Maybe<Scalars['Boolean']>;
  badColorReason?: Maybe<Scalars['ID']>;
  relatedService?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  toothNumber_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  toothService_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  cl_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  isBadColor_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  badColorReason_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedService_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryAllOrderArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  invoice?: Maybe<Scalars['ID']>;
  logs?: Maybe<Array<Maybe<Scalars['ID']>>>;
  ticket?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['Date']>;
  expectedDate?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  finalizedLab?: Maybe<Scalars['ID']>;
  relatedService?: Maybe<Scalars['ID']>;
  invoice_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  logs_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  ticket_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  expectedDate_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  finalizedLab_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedService_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  searchByName?: Maybe<Scalars['String']>;
  doctorId?: Maybe<Array<Maybe<Scalars['String']>>>;
  statusStartwith?: Maybe<Scalars['String']>;
};


export type QueryInvoiceArgs = {
  id: Scalars['ID'];
};


export type QueryAllInvoiceArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  actualDate?: Maybe<Scalars['Date']>;
  price?: Maybe<Scalars['Float']>;
  description?: Maybe<Scalars['String']>;
  relatedOrder?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  actualDate_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  price_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedOrder_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryPatientPicArgs = {
  id: Scalars['ID'];
};


export type QueryAllPatientpicArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  patient?: Maybe<Scalars['ID']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  patient_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryLogArgs = {
  id: Scalars['ID'];
};


export type QueryAllLogArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  relatedOrder?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedOrder_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryTicketArgs = {
  id: Scalars['ID'];
};


export type QueryAllTicketArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  sender?: Maybe<Scalars['ID']>;
  receiver?: Maybe<Scalars['ID']>;
  message?: Maybe<Scalars['String']>;
  relatedOrder?: Maybe<Scalars['ID']>;
  messgaeStatus?: Maybe<Scalars['String']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  sender_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  receiver_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  message_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  relatedOrder_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  messgaeStatus_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryLabPicArgs = {
  id: Scalars['ID'];
};


export type QueryAllLabpicArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  lab?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  lab_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  number_In?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
  refreshToken: Scalars['String'];
};

export type ReportNode = {
  __typename?: 'ReportNode';
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
};

export type RequestOtp = {
  __typename?: 'RequestOTP';
  status?: Maybe<Scalars['String']>;
};

export type Service = BusinessLogicNode & {
  __typename?: 'Service';
  /** The ID of the object */
  id: Scalars['ID'];
  relatedDoctor: Doctor;
  relatedPatient: PatientType;
  category?: Maybe<ServiceCategory>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  relatedSmileDesign?: Maybe<SmileDesignService>;
  centralSize?: Maybe<Scalars['Int']>;
  Teeth: ToothConnection;
  orders: Array<OrderType>;
  _id?: Maybe<Scalars['Int']>;
};


export type ServiceTeethArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  toothNumber_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  toothService_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cl_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  isBadColor_In?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  badColorReason_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedService_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ServiceCategory = BusinessLogicNode & {
  __typename?: 'ServiceCategory';
  /** The ID of the object */
  id: Scalars['ID'];
  path: Scalars['String'];
  depth: Scalars['Int'];
  numchild: Scalars['Int'];
  name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  serviceSet: Array<ServiceType>;
  _id?: Maybe<Scalars['Int']>;
};

export type ServiceCategoryConnection = {
  __typename?: 'ServiceCategoryConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ServiceCategoryEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
  edgeCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `ServiceCategory` and its cursor. */
export type ServiceCategoryEdge = {
  __typename?: 'ServiceCategoryEdge';
  /** The item at the end of the edge */
  node?: Maybe<ServiceCategory>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ServiceConnection = {
  __typename?: 'ServiceConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ServiceEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
  edgeCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `Service` and its cursor. */
export type ServiceEdge = {
  __typename?: 'ServiceEdge';
  /** The item at the end of the edge */
  node?: Maybe<Service>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ServiceType = {
  __typename?: 'ServiceType';
  id: Scalars['ID'];
  relatedDoctor: Doctor;
  relatedPatient: PatientType;
  category?: Maybe<ServiceCategory>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  relatedSmileDesign?: Maybe<SmileDesignService>;
  centralSize?: Maybe<Scalars['Int']>;
  Teeth: ToothConnection;
  orders: Array<OrderType>;
};


export type ServiceTypeTeethArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  toothNumber_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  toothService_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cl_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  isBadColor_In?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  badColorReason_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedService_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type SmileCategory = SmileDesignNode & {
  __typename?: 'SmileCategory';
  path: Scalars['String'];
  depth: Scalars['Int'];
  numchild: Scalars['Int'];
  /** The ID of the object */
  id: Scalars['ID'];
  name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  smiledesignserviceSet: SmileDesignServiceConnection;
  _id?: Maybe<Scalars['Int']>;
};


export type SmileCategorySmiledesignserviceSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  service_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  relatedSmileColor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedSmileCategory_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  patient_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  doctor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  shape_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  width_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  heigth_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type SmileCategoryConnection = {
  __typename?: 'SmileCategoryConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SmileCategoryEdge>>;
};

/** A Relay edge containing a `SmileCategory` and its cursor. */
export type SmileCategoryEdge = {
  __typename?: 'SmileCategoryEdge';
  /** The item at the end of the edge */
  node?: Maybe<SmileCategory>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type SmileColor = SmileDesignNode & {
  __typename?: 'SmileColor';
  path: Scalars['String'];
  depth: Scalars['Int'];
  numchild: Scalars['Int'];
  /** The ID of the object */
  id: Scalars['ID'];
  name: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  smiledesignserviceSet: SmileDesignServiceConnection;
  _id?: Maybe<Scalars['Int']>;
};


export type SmileColorSmiledesignserviceSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  service_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  relatedSmileColor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedSmileCategory_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  patient_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  doctor_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  shape_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  width_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  heigth_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type SmileColorConnection = {
  __typename?: 'SmileColorConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SmileColorEdge>>;
};

/** A Relay edge containing a `SmileColor` and its cursor. */
export type SmileColorEdge = {
  __typename?: 'SmileColorEdge';
  /** The item at the end of the edge */
  node?: Maybe<SmileColor>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type SmileDesignImages = {
  teethLessImage?: Maybe<Scalars['Upload']>;
  smileImageResult?: Maybe<Scalars['Upload']>;
};

export type SmileDesignService = SmileDesignNode & {
  __typename?: 'SmileDesignService';
  /** The ID of the object */
  id: Scalars['ID'];
  teethLessImage?: Maybe<Scalars['String']>;
  smileImageResult?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  relatedSmileColor?: Maybe<SmileColor>;
  relatedSmileCategory?: Maybe<SmileCategory>;
  patient?: Maybe<PatientType>;
  doctor?: Maybe<Doctor>;
  status: SmiledesignSmileDesignServiceStatusChoices;
  shape?: Maybe<FaceShape>;
  width?: Maybe<Scalars['Int']>;
  heigth?: Maybe<Scalars['Int']>;
  serviceSet: Array<ServiceType>;
  _id?: Maybe<Scalars['Int']>;
};

export type SmileDesignServiceConnection = {
  __typename?: 'SmileDesignServiceConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<SmileDesignServiceEdge>>;
};

/** A Relay edge containing a `SmileDesignService` and its cursor. */
export type SmileDesignServiceEdge = {
  __typename?: 'SmileDesignServiceEdge';
  /** The item at the end of the edge */
  node?: Maybe<SmileDesignService>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

/** An enumeration. */
export enum SmiledesignSmileDesignServiceStatusChoices {
  /** READY */
  Ready = 'READY',
  /** NOTREADY */
  Notready = 'NOTREADY',
  /** IMPROPER IMAGE */
  ImproperImage = 'IMPROPER_IMAGE'
}

export type TeethInput = {
  toothNumber: Scalars['Int'];
  toothService?: Maybe<Scalars['String']>;
  cl?: Maybe<Scalars['Int']>;
};

export type Ticket = BusinessLogicNode & {
  __typename?: 'Ticket';
  /** The ID of the object */
  id: Scalars['ID'];
  sender: Profile;
  receiver: Profile;
  message: Scalars['String'];
  relatedOrder: OrderType;
  messgaeStatus: BusinesslogicTicketMessgaeStatusChoices;
  _id?: Maybe<Scalars['Int']>;
};

export type TicketConnection = {
  __typename?: 'TicketConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<TicketEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
  edgeCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `Ticket` and its cursor. */
export type TicketEdge = {
  __typename?: 'TicketEdge';
  /** The item at the end of the edge */
  node?: Maybe<Ticket>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Tooth = BusinessLogicNode & {
  __typename?: 'Tooth';
  /** The ID of the object */
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  toothNumber: Scalars['Int'];
  toothService?: Maybe<ToothSevice>;
  cl?: Maybe<Scalars['Int']>;
  isBadColor: Scalars['Boolean'];
  badColorReason?: Maybe<BadColorReason>;
  relatedService: ServiceType;
  _id?: Maybe<Scalars['Int']>;
};

export type ToothConnection = {
  __typename?: 'ToothConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ToothEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
  edgeCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `Tooth` and its cursor. */
export type ToothEdge = {
  __typename?: 'ToothEdge';
  /** The item at the end of the edge */
  node?: Maybe<Tooth>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type ToothMutation = {
  __typename?: 'ToothMutation';
  status?: Maybe<Scalars['String']>;
};

export type ToothMutationJson = {
  __typename?: 'ToothMutationJson';
  status?: Maybe<Scalars['String']>;
};

export type ToothSevice = BusinessLogicNode & {
  __typename?: 'ToothSevice';
  /** The ID of the object */
  id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  toothSet: ToothConnection;
  _id?: Maybe<Scalars['Int']>;
};


export type ToothSeviceToothSetArgs = {
  offset?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
  id_In?: Maybe<Array<Maybe<Scalars['String']>>>;
  createdAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  updatedAt_In?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  toothNumber_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  toothService_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  cl_In?: Maybe<Array<Maybe<Scalars['Int']>>>;
  isBadColor_In?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  badColorReason_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
  relatedService_In?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ToothSeviceConnection = {
  __typename?: 'ToothSeviceConnection';
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ToothSeviceEdge>>;
  totalCount?: Maybe<Scalars['Int']>;
  edgeCount?: Maybe<Scalars['Int']>;
};

/** A Relay edge containing a `ToothSevice` and its cursor. */
export type ToothSeviceEdge = {
  __typename?: 'ToothSeviceEdge';
  /** The item at the end of the edge */
  node?: Maybe<ToothSevice>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type UpdateLabRate = {
  __typename?: 'UpdateLabRate';
  rate?: Maybe<Scalars['Float']>;
};

export type UpdateOrder = {
  __typename?: 'UpdateOrder';
  status?: Maybe<Scalars['String']>;
};

export type UpdatePatientPic = {
  __typename?: 'UpdatePatientPic';
  status?: Maybe<Scalars['String']>;
};

export type UpdateProfile = {
  __typename?: 'UpdateProfile';
  status?: Maybe<Scalars['String']>;
};

export type UpdateSmileDesign = {
  __typename?: 'UpdateSmileDesign';
  status?: Maybe<Scalars['String']>;
};


export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
};

export type VerifyUser = {
  __typename?: 'VerifyUser';
  status?: Maybe<Scalars['String']>;
};

export type BusinessLogicNode = {
  /** The ID of the object */
  id: Scalars['ID'];
};

export type ExtendProfileNode = {
  /** The ID of the object */
  id: Scalars['ID'];
};

export type NotificationNode = {
  /** The ID of the object */
  id: Scalars['ID'];
};

export type PatientPics = {
  smileImage?: Maybe<Scalars['Upload']>;
  fullSmileImage?: Maybe<Scalars['Upload']>;
  sideImage?: Maybe<Scalars['Upload']>;
  optionalImage?: Maybe<Scalars['Upload']>;
};

export type PatientPicsDeletion = {
  smileImage?: Maybe<Scalars['Boolean']>;
  fullSmileImage?: Maybe<Scalars['Boolean']>;
  sideImage?: Maybe<Scalars['Boolean']>;
  optionalImage?: Maybe<Scalars['Boolean']>;
};

export type SmileDesignNode = {
  /** The ID of the object */
  id: Scalars['ID'];
};

export type Save_DesignMutationVariables = Exact<{
  dr: Scalars['Int'];
  p_id: Scalars['Int'];
  images?: Maybe<SmileDesignImages>;
  model: Scalars['String'];
  color: Scalars['String'];
}>;


export type Save_DesignMutation = (
  { __typename?: 'Mutations' }
  & { updateSmileDesign?: Maybe<(
    { __typename?: 'UpdateSmileDesign' }
    & Pick<UpdateSmileDesign, 'status'>
  )> }
);

export type CreatepatientMutationVariables = Exact<{
  Name: Scalars['String'];
  Pics?: Maybe<PatientPics>;
  Phone_no: Scalars['String'];
  age: Scalars['Int'];
  id: Scalars['Int'];
}>;


export type CreatepatientMutation = (
  { __typename?: 'Mutations' }
  & { createPatient?: Maybe<(
    { __typename?: 'CreatePatient' }
    & Pick<CreatePatient, 'token'>
  )> }
);

export type CreatelabMutationVariables = Exact<{
  Username: Scalars['String'];
  mobile: Scalars['String'];
  land: Scalars['String'];
  adress: Scalars['String'];
  description: Scalars['String'];
}>;


export type CreatelabMutation = (
  { __typename?: 'Mutations' }
  & { createLab?: Maybe<(
    { __typename?: 'CreateLab' }
    & Pick<CreateLab, 'token'>
  )> }
);

export type ForgetPassMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
}>;


export type ForgetPassMutation = (
  { __typename?: 'Mutations' }
  & { forgetPass?: Maybe<(
    { __typename?: 'ForgetPass' }
    & Pick<ForgetPass, 'status'>
  )> }
);

export type DelpatientpicMutationVariables = Exact<{
  id: Scalars['Int'];
  selectedFields?: Maybe<PatientPicsDeletion>;
}>;


export type DelpatientpicMutation = (
  { __typename?: 'Mutations' }
  & { deletePatientPic?: Maybe<(
    { __typename?: 'DeletePatientPic' }
    & Pick<DeletePatientPic, 'status'>
  )> }
);

export type Update_PicMutationVariables = Exact<{
  id: Scalars['Int'];
  pics: PatientPics;
}>;


export type Update_PicMutation = (
  { __typename?: 'Mutations' }
  & { updatePatientPic?: Maybe<(
    { __typename?: 'UpdatePatientPic' }
    & Pick<UpdatePatientPic, 'status'>
  )> }
);

export type InvoiceMutationVariables = Exact<{
  s_id: Scalars['ID'];
  teeth: Scalars['JSONString'];
  central: Scalars['String'];
}>;


export type InvoiceMutation = (
  { __typename?: 'Mutations' }
  & { toothMutationJson?: Maybe<(
    { __typename?: 'ToothMutationJson' }
    & Pick<ToothMutationJson, 'status'>
  )> }
);

export type ServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type ServicesQuery = (
  { __typename?: 'Query' }
  & { allToothsevice?: Maybe<(
    { __typename?: 'ToothSeviceConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'ToothSeviceEdge' }
      & { node?: Maybe<(
        { __typename?: 'ToothSevice' }
        & Pick<ToothSevice, 'name'>
      )> }
    )>> }
  )> }
);

export type CreateOrderMutationVariables = Exact<{
  sid: Scalars['ID'];
  lid: Scalars['ID'];
  date?: Maybe<Scalars['Date']>;
}>;


export type CreateOrderMutation = (
  { __typename?: 'Mutations' }
  & { createOrder?: Maybe<(
    { __typename?: 'CreateOrderPayload' }
    & { order?: Maybe<(
      { __typename?: 'OrderType' }
      & Pick<OrderType, 'id'>
    )> }
  )> }
);

export type Orders_LQueryVariables = Exact<{
  dr?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
  lab?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
}>;


export type Orders_LQuery = (
  { __typename?: 'Query' }
  & { allOrder?: Maybe<(
    { __typename?: 'OrderConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'OrderEdge' }
      & { node?: Maybe<(
        { __typename?: 'Order' }
        & Pick<Order, '_id' | 'id' | 'status' | 'expectedDate'>
        & { relatedService?: Maybe<(
          { __typename?: 'ServiceType' }
          & { relatedPatient: (
            { __typename?: 'PatientType' }
            & { relatedProfile: (
              { __typename?: 'Profile' }
              & Pick<Profile, 'firstName' | 'profilePic'>
            ) }
          ) }
        )> }
      )> }
    )>> }
  )> }
);

export type TicketMutationVariables = Exact<{
  text: Scalars['String'];
  order: Scalars['Int'];
  send: Scalars['Int'];
  receive: Scalars['Int'];
}>;


export type TicketMutation = (
  { __typename?: 'Mutations' }
  & { createTicker?: Maybe<(
    { __typename?: 'CreateTicket' }
    & Pick<CreateTicket, 'status'>
  )> }
);

export type LabQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type LabQuery = (
  { __typename?: 'Query' }
  & { Lab?: Maybe<(
    { __typename?: 'Lab' }
    & { relatedProfile: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'id' | '_id' | 'firstName' | 'phoneNumber' | 'telephoneNumber'>
    ), orderSet: Array<(
      { __typename?: 'OrderType' }
      & Pick<OrderType, 'expectedDate'>
      & { relatedService?: Maybe<(
        { __typename?: 'ServiceType' }
        & { relatedPatient: (
          { __typename?: 'PatientType' }
          & { relatedProfile: (
            { __typename?: 'Profile' }
            & Pick<Profile, 'firstName' | 'profilePic'>
          ) }
        ) }
      )> }
    )> }
  )> }
);

export type LabsQueryVariables = Exact<{ [key: string]: never; }>;


export type LabsQuery = (
  { __typename?: 'Query' }
  & { allLab?: Maybe<(
    { __typename?: 'LabConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'LabEdge' }
      & { node?: Maybe<(
        { __typename?: 'Lab' }
        & Pick<Lab, 'id' | '_id'>
        & { relatedProfile: (
          { __typename?: 'Profile' }
          & Pick<Profile, 'firstName'>
        ) }
      )> }
    )>> }
  )> }
);

export type Search_LabQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type Search_LabQuery = (
  { __typename?: 'Query' }
  & { allLab?: Maybe<(
    { __typename?: 'LabConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'LabEdge' }
      & { node?: Maybe<(
        { __typename?: 'Lab' }
        & Pick<Lab, 'id' | '_id'>
        & { relatedProfile: (
          { __typename?: 'Profile' }
          & Pick<Profile, 'firstName'>
        ) }
      )> }
    )>> }
  )> }
);

export type CreateDeviceMutationVariables = Exact<{
  ProfileId: Scalars['ID'];
  deviceId: Scalars['String'];
}>;


export type CreateDeviceMutation = (
  { __typename?: 'Mutations' }
  & { createDevice?: Maybe<(
    { __typename?: 'CreateDevice' }
    & Pick<CreateDevice, 'status'>
  )> }
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutations' }
  & { tokenAuth?: Maybe<(
    { __typename?: 'ObtainJSONWebToken' }
    & Pick<ObtainJsonWebToken, 'token' | 'profile'>
  )> }
);

export type VerifyMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyMutation = (
  { __typename?: 'Mutations' }
  & { verifyToken?: Maybe<(
    { __typename?: 'Verify' }
    & Pick<Verify, 'payload'>
  )> }
);

export type LabratedQueryVariables = Exact<{ [key: string]: never; }>;


export type LabratedQuery = (
  { __typename?: 'Query' }
  & { allLab?: Maybe<(
    { __typename?: 'LabConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'LabEdge' }
      & { node?: Maybe<(
        { __typename?: 'Lab' }
        & Pick<Lab, 'rating' | 'id'>
        & { relatedProfile: (
          { __typename?: 'Profile' }
          & Pick<Profile, 'firstName'>
        ) }
      )> }
    )>> }
  )> }
);

export type AllnotifQueryVariables = Exact<{
  id?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
}>;


export type AllnotifQuery = (
  { __typename?: 'Query' }
  & { allNotification?: Maybe<(
    { __typename?: 'NotificationConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'NotificationEdge' }
      & { node?: Maybe<(
        { __typename?: 'Notification' }
        & Pick<Notification, 'id' | 'message'>
      )> }
    )>> }
  )> }
);

export type OrderQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type OrderQuery = (
  { __typename?: 'Query' }
  & { Order?: Maybe<(
    { __typename?: 'Order' }
    & Pick<Order, 'id' | 'status' | 'expectedDate'>
    & { finalizedLab?: Maybe<(
      { __typename?: 'Lab' }
      & { relatedProfile: (
        { __typename?: 'Profile' }
        & Pick<Profile, 'firstName'>
      ) }
    )>, ticketSet: (
      { __typename?: 'TicketConnection' }
      & { edges: Array<Maybe<(
        { __typename?: 'TicketEdge' }
        & { node?: Maybe<(
          { __typename?: 'Ticket' }
          & Pick<Ticket, 'id' | 'message'>
          & { sender: (
            { __typename?: 'Profile' }
            & Pick<Profile, '_id'>
          ) }
        )> }
      )>> }
    ), invoice?: Maybe<(
      { __typename?: 'InvoiceType' }
      & Pick<InvoiceType, 'price' | 'description' | 'actualDate'>
    )>, relatedService?: Maybe<(
      { __typename?: 'ServiceType' }
      & { relatedPatient: (
        { __typename?: 'PatientType' }
        & { relatedProfile: (
          { __typename?: 'Profile' }
          & Pick<Profile, 'firstName' | 'lastName' | 'profilePic'>
        ) }
      ) }
    )> }
  )> }
);

export type UpdateOrderMutationVariables = Exact<{
  id: Scalars['ID'];
  status?: Maybe<Scalars['String']>;
}>;


export type UpdateOrderMutation = (
  { __typename?: 'Mutations' }
  & { updateOrder?: Maybe<(
    { __typename?: 'UpdateOrder' }
    & Pick<UpdateOrder, 'status'>
  )> }
);

export type OrdersQueryVariables = Exact<{
  dr?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
}>;


export type OrdersQuery = (
  { __typename?: 'Query' }
  & { allOrder?: Maybe<(
    { __typename?: 'OrderConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'OrderEdge' }
      & { node?: Maybe<(
        { __typename?: 'Order' }
        & Pick<Order, '_id' | 'id' | 'status' | 'expectedDate'>
        & { relatedService?: Maybe<(
          { __typename?: 'ServiceType' }
          & { relatedPatient: (
            { __typename?: 'PatientType' }
            & { relatedProfile: (
              { __typename?: 'Profile' }
              & Pick<Profile, 'firstName' | 'profilePic'>
            ) }
          ) }
        )> }
      )> }
    )>> }
  )> }
);

export type Orders_SQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type Orders_SQuery = (
  { __typename?: 'Query' }
  & { allOrder?: Maybe<(
    { __typename?: 'OrderConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'OrderEdge' }
      & { node?: Maybe<(
        { __typename?: 'Order' }
        & Pick<Order, '_id' | 'id' | 'status' | 'expectedDate'>
        & { relatedService?: Maybe<(
          { __typename?: 'ServiceType' }
          & { relatedPatient: (
            { __typename?: 'PatientType' }
            & { relatedProfile: (
              { __typename?: 'Profile' }
              & Pick<Profile, 'firstName' | 'profilePic'>
            ) }
          ) }
        )> }
      )> }
    )>> }
  )> }
);

export type Orders_StateQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type Orders_StateQuery = (
  { __typename?: 'Query' }
  & { allOrder?: Maybe<(
    { __typename?: 'OrderConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'OrderEdge' }
      & { node?: Maybe<(
        { __typename?: 'Order' }
        & Pick<Order, '_id' | 'id' | 'status' | 'expectedDate'>
        & { relatedService?: Maybe<(
          { __typename?: 'ServiceType' }
          & { relatedPatient: (
            { __typename?: 'PatientType' }
            & { relatedProfile: (
              { __typename?: 'Profile' }
              & Pick<Profile, 'firstName' | 'profilePic'>
            ) }
          ) }
        )> }
      )> }
    )>> }
  )> }
);

export type DelPatientMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DelPatientMutation = (
  { __typename?: 'Mutations' }
  & { deletePatient?: Maybe<(
    { __typename?: 'DeletePatient' }
    & Pick<DeletePatient, 'status'>
  )> }
);

export type PatientQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PatientQuery = (
  { __typename?: 'Query' }
  & { Patient?: Maybe<(
    { __typename?: 'Patient' }
    & Pick<Patient, '_id'>
    & { patientPic?: Maybe<(
      { __typename?: 'PatientPic' }
      & Pick<PatientPic, 'sideImage' | 'fullSmileImage' | 'optionalImage' | 'smileImage'>
    )>, relatedProfile: (
      { __typename?: 'Profile' }
      & Pick<Profile, 'firstName' | 'lastName' | 'profilePic' | '_id' | 'age' | 'phoneNumber'>
    ) }
  )> }
);

export type PatientsQueryVariables = Exact<{
  dr?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
}>;


export type PatientsQuery = (
  { __typename?: 'Query' }
  & { allPatient?: Maybe<(
    { __typename?: 'PatientConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'PatientEdge' }
      & { node?: Maybe<(
        { __typename?: 'Patient' }
        & Pick<Patient, 'id'>
        & { relatedProfile: (
          { __typename?: 'Profile' }
          & Pick<Profile, 'id' | 'firstName' | 'lastName' | 'profilePic'>
        ) }
      )> }
    )>> }
  )> }
);

export type Search_PQueryVariables = Exact<{
  id: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  name: Scalars['String'];
}>;


export type Search_PQuery = (
  { __typename?: 'Query' }
  & { allPatient?: Maybe<(
    { __typename?: 'PatientConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'PatientEdge' }
      & { node?: Maybe<(
        { __typename?: 'Patient' }
        & Pick<Patient, 'id'>
        & { relatedProfile: (
          { __typename?: 'Profile' }
          & Pick<Profile, 'id' | 'firstName' | 'lastName' | 'profilePic'>
        ) }
      )> }
    )>> }
  )> }
);

export type ProfileQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProfileQuery = (
  { __typename?: 'Query' }
  & { Profile?: Maybe<(
    { __typename?: 'Profile' }
    & Pick<Profile, 'id' | 'phoneNumber' | 'email'>
  )> }
);

export type ProfilePicMutationVariables = Exact<{
  id: Scalars['ID'];
  profilePic?: Maybe<Scalars['Upload']>;
}>;


export type ProfilePicMutation = (
  { __typename?: 'Mutations' }
  & { updateProfile?: Maybe<(
    { __typename?: 'UpdateProfile' }
    & Pick<UpdateProfile, 'status'>
  )> }
);

export type ChangePassMutationVariables = Exact<{
  new: Scalars['String'];
  user: Scalars['String'];
}>;


export type ChangePassMutation = (
  { __typename?: 'Mutations' }
  & { changePassword?: Maybe<(
    { __typename?: 'ChangePassword' }
    & Pick<ChangePassword, 'status'>
  )> }
);

export type Req_OtpMutationVariables = Exact<{
  username: Scalars['String'];
}>;


export type Req_OtpMutation = (
  { __typename?: 'Mutations' }
  & { requestOtp?: Maybe<(
    { __typename?: 'RequestOTP' }
    & Pick<RequestOtp, 'status'>
  )> }
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutations' }
  & { createUser?: Maybe<(
    { __typename?: 'CreateUser' }
    & Pick<CreateUser, 'token'>
  )> }
);

export type ServiceMutationVariables = Exact<{
  p_id: Scalars['ID'];
  d_id: Scalars['ID'];
}>;


export type ServiceMutation = (
  { __typename?: 'Mutations' }
  & { createService?: Maybe<(
    { __typename?: 'CreateServicePayload' }
    & { service?: Maybe<(
      { __typename?: 'ServiceType' }
      & Pick<ServiceType, 'id'>
    )> }
  )> }
);

export type AllsmileQueryVariables = Exact<{
  d_id?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
  p_id?: Maybe<Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>>;
}>;


export type AllsmileQuery = (
  { __typename?: 'Query' }
  & { allSmiledesignservice?: Maybe<(
    { __typename?: 'SmileDesignServiceConnection' }
    & { edges: Array<Maybe<(
      { __typename?: 'SmileDesignServiceEdge' }
      & { node?: Maybe<(
        { __typename?: 'SmileDesignService' }
        & Pick<SmileDesignService, 'status' | 'teethLessImage' | 'width' | 'heigth'>
      )> }
    )>> }
  )> }
);

export type OtpMutationVariables = Exact<{
  user: Scalars['String'];
}>;


export type OtpMutation = (
  { __typename?: 'Mutations' }
  & { requestOtp?: Maybe<(
    { __typename?: 'RequestOTP' }
    & Pick<RequestOtp, 'status'>
  )> }
);

export type Verify_UserMutationVariables = Exact<{
  Username: Scalars['String'];
  Otp: Scalars['String'];
}>;


export type Verify_UserMutation = (
  { __typename?: 'Mutations' }
  & { verifyUser?: Maybe<(
    { __typename?: 'VerifyUser' }
    & Pick<VerifyUser, 'status'>
  )> }
);

export const Save_DesignDocument = gql`
    mutation save_design($dr: Int!, $p_id: Int!, $images: SmileDesignImages, $model: String!, $color: String!) {
  updateSmileDesign(
    doctorId: $dr
    patientId: $p_id
    smileDesignImages: $images
    smileCategory: $model
    smileColor: $color
  ) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Save_DesignGQL extends Apollo.Mutation<Save_DesignMutation, Save_DesignMutationVariables> {
    document = Save_DesignDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatepatientDocument = gql`
    mutation createpatient($Name: String!, $Pics: patientPics, $Phone_no: String!, $age: Int!, $id: Int!) {
  createPatient(
    name: $Name
    profileDoctorId: $id
    patientPics: $Pics
    age: $age
    phoneNumber: $Phone_no
  ) {
    token
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatepatientGQL extends Apollo.Mutation<CreatepatientMutation, CreatepatientMutationVariables> {
    document = CreatepatientDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreatelabDocument = gql`
    mutation createlab($Username: String!, $mobile: String!, $land: String!, $adress: String!, $description: String!) {
  createLab(
    name: $Username
    phoneNumber: $mobile
    telephoneNumber: $land
    address: $adress
    description: $description
  ) {
    token
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreatelabGQL extends Apollo.Mutation<CreatelabMutation, CreatelabMutationVariables> {
    document = CreatelabDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ForgetPassDocument = gql`
    mutation forgetPass($phoneNumber: String!) {
  forgetPass(phoneNumber: $phoneNumber) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ForgetPassGQL extends Apollo.Mutation<ForgetPassMutation, ForgetPassMutationVariables> {
    document = ForgetPassDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DelpatientpicDocument = gql`
    mutation delpatientpic($id: Int!, $selectedFields: patientPicsDeletion) {
  deletePatientPic(patientId: $id, selectedFields: $selectedFields) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DelpatientpicGQL extends Apollo.Mutation<DelpatientpicMutation, DelpatientpicMutationVariables> {
    document = DelpatientpicDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const Update_PicDocument = gql`
    mutation update_pic($id: Int!, $pics: patientPics!) {
  updatePatientPic(patientId: $id, patientPics: $pics) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Update_PicGQL extends Apollo.Mutation<Update_PicMutation, Update_PicMutationVariables> {
    document = Update_PicDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const InvoiceDocument = gql`
    mutation invoice($s_id: ID!, $teeth: JSONString!, $central: String!) {
  toothMutationJson(
    relatedService: $s_id
    jsonObject: $teeth
    centralSize: $central
  ) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class InvoiceGQL extends Apollo.Mutation<InvoiceMutation, InvoiceMutationVariables> {
    document = InvoiceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ServicesDocument = gql`
    query services {
  allToothsevice {
    edges {
      node {
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ServicesGQL extends Apollo.Query<ServicesQuery, ServicesQueryVariables> {
    document = ServicesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateOrderDocument = gql`
    mutation createOrder($sid: ID!, $lid: ID!, $date: Date) {
  createOrder(
    input: {relatedService: $sid, finalizedLab: $lid, status: "sent", expectedDate: $date}
  ) {
    order {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateOrderGQL extends Apollo.Mutation<CreateOrderMutation, CreateOrderMutationVariables> {
    document = CreateOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const Orders_LDocument = gql`
    query orders_l($dr: [String], $lab: [String]) {
  allOrder(doctorId: $dr, finalizedLab_In: $lab) {
    edges {
      node {
        _id
        id
        status
        expectedDate
        relatedService {
          relatedPatient {
            relatedProfile {
              firstName
              profilePic
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Orders_LGQL extends Apollo.Query<Orders_LQuery, Orders_LQueryVariables> {
    document = Orders_LDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TicketDocument = gql`
    mutation ticket($text: String!, $order: Int!, $send: Int!, $receive: Int!) {
  createTicker(
    message: $text
    relatedOrder: $order
    receiverProfile: $receive
    senderProfile: $send
  ) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TicketGQL extends Apollo.Mutation<TicketMutation, TicketMutationVariables> {
    document = TicketDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LabDocument = gql`
    query lab($id: ID!) {
  Lab(id: $id) {
    relatedProfile {
      id
      _id
      firstName
      phoneNumber
      telephoneNumber
    }
    orderSet {
      expectedDate
      relatedService {
        relatedPatient {
          relatedProfile {
            firstName
            profilePic
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LabGQL extends Apollo.Query<LabQuery, LabQueryVariables> {
    document = LabDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LabsDocument = gql`
    query labs {
  allLab {
    edges {
      node {
        id
        _id
        relatedProfile {
          firstName
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LabsGQL extends Apollo.Query<LabsQuery, LabsQueryVariables> {
    document = LabsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const Search_LabDocument = gql`
    query search_lab($name: String!) {
  allLab(searchByName: $name) {
    edges {
      node {
        id
        _id
        relatedProfile {
          firstName
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Search_LabGQL extends Apollo.Query<Search_LabQuery, Search_LabQueryVariables> {
    document = Search_LabDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateDeviceDocument = gql`
    mutation CreateDevice($ProfileId: ID!, $deviceId: String!) {
  createDevice(ProfileId: $ProfileId, deviceId: $deviceId) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateDeviceGQL extends Apollo.Mutation<CreateDeviceMutation, CreateDeviceMutationVariables> {
    document = CreateDeviceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
    profile
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const VerifyDocument = gql`
    mutation verify($token: String!) {
  verifyToken(token: $token) {
    payload
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class VerifyGQL extends Apollo.Mutation<VerifyMutation, VerifyMutationVariables> {
    document = VerifyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LabratedDocument = gql`
    query labrated {
  allLab(sortByRate: "-rating") {
    edges {
      node {
        rating
        id
        relatedProfile {
          firstName
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LabratedGQL extends Apollo.Query<LabratedQuery, LabratedQueryVariables> {
    document = LabratedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AllnotifDocument = gql`
    query allnotif($id: [String]) {
  allNotification(receivers_In: $id) {
    edges {
      node {
        id
        message
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AllnotifGQL extends Apollo.Query<AllnotifQuery, AllnotifQueryVariables> {
    document = AllnotifDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OrderDocument = gql`
    query order($id: ID!) {
  Order(id: $id) {
    id
    status
    finalizedLab {
      relatedProfile {
        firstName
      }
    }
    ticketSet {
      edges {
        node {
          id
          message
          sender {
            _id
          }
        }
      }
    }
    invoice {
      price
      description
      actualDate
    }
    expectedDate
    relatedService {
      relatedPatient {
        relatedProfile {
          firstName
          lastName
          profilePic
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class OrderGQL extends Apollo.Query<OrderQuery, OrderQueryVariables> {
    document = OrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateOrderDocument = gql`
    mutation UpdateOrder($id: ID!, $status: String) {
  updateOrder(status: $status, orderId: $id) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateOrderGQL extends Apollo.Mutation<UpdateOrderMutation, UpdateOrderMutationVariables> {
    document = UpdateOrderDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OrdersDocument = gql`
    query orders($dr: [String]) {
  allOrder(doctorId: $dr) {
    edges {
      node {
        _id
        id
        status
        expectedDate
        relatedService {
          relatedPatient {
            relatedProfile {
              firstName
              profilePic
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class OrdersGQL extends Apollo.Query<OrdersQuery, OrdersQueryVariables> {
    document = OrdersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const Orders_SDocument = gql`
    query orders_s($name: String!) {
  allOrder(searchByName: $name) {
    edges {
      node {
        _id
        id
        status
        expectedDate
        relatedService {
          relatedPatient {
            relatedProfile {
              firstName
              profilePic
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Orders_SGQL extends Apollo.Query<Orders_SQuery, Orders_SQueryVariables> {
    document = Orders_SDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const Orders_StateDocument = gql`
    query orders_state($name: String!) {
  allOrder(statusStartwith: $name) {
    edges {
      node {
        _id
        id
        status
        expectedDate
        relatedService {
          relatedPatient {
            relatedProfile {
              firstName
              profilePic
            }
          }
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Orders_StateGQL extends Apollo.Query<Orders_StateQuery, Orders_StateQueryVariables> {
    document = Orders_StateDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DelPatientDocument = gql`
    mutation delPatient($id: Int!) {
  deletePatient(patientId: $id) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DelPatientGQL extends Apollo.Mutation<DelPatientMutation, DelPatientMutationVariables> {
    document = DelPatientDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PatientDocument = gql`
    query patient($id: ID!) {
  Patient(id: $id) {
    _id
    patientPic {
      sideImage
      fullSmileImage
      optionalImage
      smileImage
    }
    relatedProfile {
      firstName
      lastName
      profilePic
      _id
      age
      phoneNumber
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatientGQL extends Apollo.Query<PatientQuery, PatientQueryVariables> {
    document = PatientDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PatientsDocument = gql`
    query patients($dr: [String]) {
  allPatient(doctor_In: $dr) {
    edges {
      node {
        id
        relatedProfile {
          id
          firstName
          lastName
          profilePic
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PatientsGQL extends Apollo.Query<PatientsQuery, PatientsQueryVariables> {
    document = PatientsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const Search_PDocument = gql`
    query search_p($id: [String]!, $name: String!) {
  allPatient(doctor_In: $id, searchByName: $name) {
    edges {
      node {
        id
        relatedProfile {
          id
          firstName
          lastName
          profilePic
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Search_PGQL extends Apollo.Query<Search_PQuery, Search_PQueryVariables> {
    document = Search_PDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProfileDocument = gql`
    query profile($id: ID!) {
  Profile(id: $id) {
    id
    phoneNumber
    email
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProfileGQL extends Apollo.Query<ProfileQuery, ProfileQueryVariables> {
    document = ProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProfilePicDocument = gql`
    mutation profilePic($id: ID!, $profilePic: Upload) {
  updateProfile(profilePic: $profilePic, id: $id) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProfilePicGQL extends Apollo.Mutation<ProfilePicMutation, ProfilePicMutationVariables> {
    document = ProfilePicDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ChangePassDocument = gql`
    mutation changePass($new: String!, $user: String!) {
  changePassword(newPassword: $new, username: $user) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ChangePassGQL extends Apollo.Mutation<ChangePassMutation, ChangePassMutationVariables> {
    document = ChangePassDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const Req_OtpDocument = gql`
    mutation req_otp($username: String!) {
  requestOtp(username: $username) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Req_OtpGQL extends Apollo.Mutation<Req_OtpMutation, Req_OtpMutationVariables> {
    document = Req_OtpDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RegisterDocument = gql`
    mutation register($username: String!, $password: String!, $email: String!) {
  createUser(username: $username, password: $password, email: $email) {
    token
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
    document = RegisterDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ServiceDocument = gql`
    mutation service($p_id: ID!, $d_id: ID!) {
  createService(input: {relatedPatient: $p_id, relatedDoctor: $d_id}) {
    service {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ServiceGQL extends Apollo.Mutation<ServiceMutation, ServiceMutationVariables> {
    document = ServiceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AllsmileDocument = gql`
    query allsmile($d_id: [String], $p_id: [String]) {
  allSmiledesignservice(doctor_In: $d_id, patient_In: $p_id) {
    edges {
      node {
        status
        teethLessImage
        width
        heigth
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AllsmileGQL extends Apollo.Query<AllsmileQuery, AllsmileQueryVariables> {
    document = AllsmileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OtpDocument = gql`
    mutation OTP($user: String!) {
  requestOtp(username: $user) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class OtpGQL extends Apollo.Mutation<OtpMutation, OtpMutationVariables> {
    document = OtpDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const Verify_UserDocument = gql`
    mutation verify_user($Username: String!, $Otp: String!) {
  verifyUser(username: $Username, otpMessage: $Otp) {
    status
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class Verify_UserGQL extends Apollo.Mutation<Verify_UserMutation, Verify_UserMutationVariables> {
    document = Verify_UserDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }