<?php

namespace App\Controllers;

use App\Models\Item;
use App\Helpers\Validation\Validator;

class ItemController {

    public function find($req, $res) {
        $items = Item::all();
        return $res->withJson(['results' => $items->toArray()]);
    }

    public function create($req, $res) {
        $body = $req->getParsedBody() ?? [];

        $validate = Validator::make($body, [
            'title' => 'required|max:40',
            'completed' => 'boolean',
        ]);

        if ($validate->fails()) {
            $errors = $validate->errors();
            return $res
                ->withStatus(400)
                ->withJson([
                    'message' => $errors->all()[0],
                ]);
        }

        $item = Item::create($body);
        return $res->withJson($item->toArray(), 201);
    }

    public function get($req, $res, $args) {
        $item = Item::findOrFail($args['id']);
        return $res->withJson($item->toArray());
    }

    public function update($req, $res, $args) {
        $body = $req->getParsedBody() ?? [];

        $validate = Validator::make($body, [
            'title' => 'max:40',
            'completed' => 'boolean',
        ]);

        if ($validate->fails()) {
            $errors = $validate->errors();
            return $res
                ->withStatus(400)
                ->withJson([
                    'message' => $errors->all()[0],
                ]);
        }

        $item = Item::findOrFail($args['id']);

        foreach ($body as $key => $value) {
            $item->{$key} = $value;
        }

        $item->save();

        return $res->withJson($item->toArray());
    }

    public function delete($req, $res, $args) {
        Item::findOrFail($args['id'])->delete();
        return $res->withJson([], 204);
    }
}