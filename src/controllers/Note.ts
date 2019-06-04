import * as Router from 'koa-router';

import Note, { noteNormalizer } from '../models/Note';

export const findAll = async (ctx: Router.IRouterContext) => {
  const notes = await Note.find();
  ctx.body = JSON.stringify(notes);
};

export const find = async (ctx: Router.IRouterContext) => {
  try {
    const id = ctx.params.id;
    const note = await Note.findById(id);
    if (!note) {
      ctx.throw();
    }
    ctx.body = JSON.stringify(note);
  } catch (e) {
    ctx.throw(404);
  }
};

export const create = async (ctx: Router.IRouterContext) => {
  try {
    const note = noteNormalizer(ctx.request.body);
    const newNote = new Note(note);
    const createdNote = await newNote.save();
    ctx.body = JSON.stringify(createdNote);
  } catch (e) {
    ctx.throw(400, e.message);
  }
};

export const update = async (ctx: Router.IRouterContext) => {
  try {
    const { id, title, body } = noteNormalizer(ctx.request.body);
    await Note.updateOne({ _id: id }, { title, body });
    ctx.status = 204;
  } catch (e) {
    ctx.throw(400);
  }
};

export const remove = async (ctx: Router.IRouterContext) => {
  try {
    const { id } = ctx.request.body;
    await Note.deleteOne({ _id: id });
    ctx.status = 204;
  } catch (e) {
    ctx.throw(404);
  }
};
