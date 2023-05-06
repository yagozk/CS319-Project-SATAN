package com.bilport.demo.domain.dto;

import com.mongodb.client.*;
import com.mongodb.client.model.Filters;
import com.mongodb.client.model.Filters.*;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

import org.bson.Document;
import org.bson.conversions.Bson;

public class Storage {
    static String uri = "mongodb+srv://ardaiynem:ben1Arda4@democluster.rp3o6n7.mongodb.net/test";

    public static void main(String[] args) {
        getStudentData(22002200);
    }

    // public static MongoCursor<Document> getStudentData(int id) to retrieve the
    // Document itself
    public static void getStudentData(int id) {
        try (MongoClient mongoClient = MongoClients.create(uri)) {
            // database and collection code goes here
            MongoDatabase db = mongoClient.getDatabase("demobase");
            MongoCollection<Document> coll = db.getCollection("students");
            // find code goes here
            Bson idFilter = Filters.eq("id", id);
            MongoCursor<Document> cursor = coll.find(idFilter).iterator();
            // iterate code goes here

            try {
                if (cursor.hasNext()) {
                    FileWriter writer = new FileWriter("file.txt");
                    // System.out.println("\n\nThe student: " + cursor.next().toJson());
                    writer.write(cursor.next().toJson());
                    writer.close();
                }
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            } finally {
                cursor.close();
            }

        }

    }

}
